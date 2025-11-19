import { type ReactNode, useCallback, useMemo, useState } from "react";
import { useGameLoop } from "./gameloop.hooks";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { activeEnemyAtom, slainEnemiesCountAtom } from "../enemy/enemy.atoms";
import {
  playerStatsAtom,
  playerCurrentHealthAtom,
  playerTotalEnergyEarnedAtom,
} from "../player/player.atoms";
import { playerCurrenciesAtom } from "../player/player.atoms";
import { GameLoopContext } from "./gameloop.context";
import {
  activeStageNumberAtom,
  activeAreaAtom,
  gameStateAtom,
  highestStageAtom,
  highestAreaAtom,
} from "../game-state/game-state.atoms";
import { SlainThreshold, type EnemyStats } from "../enemy/enemy.types";
import {
  getEnemyKeyByName,
  getWeightedRandomEnemy,
  precomputeWeightedEnemyPool,
} from "../enemy/enemy.helpers";
import { RARITY_THRESHOLDS } from "../enemy/enemy.constants";

export const GameLoopProvider = ({ children }: { children: ReactNode }) => {
  const playerStats = useAtomValue(playerStatsAtom);
  const activeArea = useAtomValue(activeAreaAtom);
  const highestStageNumber = useAtomValue(highestStageAtom);
  const highestAreaNumber = useAtomValue(highestAreaAtom);

  const [activeEnemy, setActiveEnemy] = useAtom(activeEnemyAtom);
  const [activeStageNumber, setActiveStageNumber] = useAtom(
    activeStageNumberAtom
  );
  const [slainEnemiesCount, setSlainEnemiesCount] = useAtom(
    slainEnemiesCountAtom
  );

  const setPlayerTotalEnergyEarned = useSetAtom(playerTotalEnergyEarnedAtom);
  const setPlayerCurrencies = useSetAtom(playerCurrenciesAtom);
  const setPlayerHealth = useSetAtom(playerCurrentHealthAtom);
  const setGameState = useSetAtom(gameStateAtom);

  const [resetTrigger, setResetTrigger] = useState(0);

  // Precompute the weighted enemy pool for the current area
  const weightedEnemyPool = useMemo(
    () => precomputeWeightedEnemyPool(activeArea.enemyPool),
    [activeArea.enemyPool]
  );

  const handleEnemyDeath = useCallback(
    (enemy: EnemyStats) => {
      const enemyKey = getEnemyKeyByName(enemy.name);
      if (!enemyKey) return;

      const currentArea = slainEnemiesCount[activeArea.AreaNumber];
      const enemyData = currentArea[enemyKey];
      const newCount = enemyData.count + 1;
      const thresholds = RARITY_THRESHOLDS[enemy.rarity];

      setSlainEnemiesCount(() => {
        // Determine the new threshold
        let newThreshold = enemyData.thresholdCrossed;

        Object.entries(thresholds).forEach(([threshold, value]) => {
          if (newCount >= value) {
            newThreshold = threshold as SlainThreshold;
          }
        });

        return {
          ...slainEnemiesCount,
          [activeArea.AreaNumber]: {
            ...currentArea,
            [enemyKey]: {
              count: newCount,
              thresholdCrossed: newThreshold,
            },
          },
        };
      });

      const totalCurrencyDropReward = () => {
        switch (enemyData.thresholdCrossed) {
          case SlainThreshold.bronze:
            return enemy.currencyDropReward * 2;
          case SlainThreshold.silver:
            return enemy.currencyDropReward * 5;
          case SlainThreshold.gold:
            return enemy.currencyDropReward * 10;
          default:
            return enemy.currencyDropReward;
        }
      };

      setPlayerCurrencies((curr) => curr + totalCurrencyDropReward());
      setPlayerTotalEnergyEarned((total) => total + totalCurrencyDropReward());
      setActiveStageNumber(activeStageNumber + 1);

      console.log("CurrencyEarned:", totalCurrencyDropReward());

      setResetTrigger((prev) => prev + 1);

      // Select a random enemy from the precomputed weighted pool
      const newEnemy = getWeightedRandomEnemy(weightedEnemyPool);

      return {
        ...newEnemy,
        currentHealth: newEnemy.health, // Reset health to full
      };
    },
    [
      slainEnemiesCount,
      activeArea.AreaNumber,
      setSlainEnemiesCount,
      setPlayerCurrencies,
      setPlayerTotalEnergyEarned,
      setActiveStageNumber,
      activeStageNumber,
      weightedEnemyPool,
    ]
  );

  const handlePlayerDeath = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      highestStageNumber: Math.max(highestStageNumber, activeStageNumber - 1),
      highestAreaNumber: Math.max(highestAreaNumber, prev.activeAreaNumber),
    }));
    setActiveStageNumber(1);
    setActiveEnemy(activeArea.enemyPool[Object.keys(activeArea.enemyPool)[0]]);
    setResetTrigger((prev) => prev + 1);
    return playerStats.totalHealth;
  }, [
    setGameState,
    setActiveStageNumber,
    setActiveEnemy,
    activeArea,
    playerStats.totalHealth,
    highestStageNumber,
    activeStageNumber,
    highestAreaNumber,
  ]);

  const handlePlayerAttack = useCallback(() => {
    setActiveEnemy((prev) => {
      const newHealth = prev.currentHealth - playerStats.totalAttackDamage;
      if (newHealth <= 0) {
        const newEnemy = handleEnemyDeath(prev);
        return newEnemy || prev;
      }

      return {
        ...prev,
        currentHealth: newHealth,
      };
    });
  }, [setActiveEnemy, playerStats.totalAttackDamage, handleEnemyDeath]);

  const handleEnemyAttack = useCallback(() => {
    setPlayerHealth((prev) => {
      const newHealth = prev - activeEnemy.attackDamage;
      if (newHealth <= 0) return handlePlayerDeath();

      return newHealth;
    });
  }, [setPlayerHealth, activeEnemy.attackDamage, handlePlayerDeath]);

  // Convert attack speed to time in seconds
  // IMPORTANT: Higher totalAttackSpeed = faster attacks = LOWER endTime
  const playerAttackProgress = useGameLoop({
    endTime: 1000 / playerStats.totalAttackSpeed, // Convert to seconds between attacks
    onTimeEnd: handlePlayerAttack,
    resetTrigger,
  });

  const enemyAttackProgress = useGameLoop({
    endTime: activeEnemy.attackSpeed / 1000, // Already in ms, just convert to seconds
    onTimeEnd: handleEnemyAttack,
    resetTrigger,
  });

  return (
    <GameLoopContext.Provider
      value={{
        playerAttackProgress,
        enemyAttackProgress,
      }}
    >
      {children}
    </GameLoopContext.Provider>
  );
};
