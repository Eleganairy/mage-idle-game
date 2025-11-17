import { type ReactNode, useCallback, useState } from "react";
import { useGameLoop } from "./gameloop.hooks";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { activeEnemyAtom } from "../enemy/enemy.atoms";
import {
  playerStatsAtom,
  playerCurrentHealthAtom,
  playerTotalEnergyEarnedAtom,
} from "../player/player.atoms";
import { playerCurrenciesAtom } from "../player/player.atoms";
import { GameLoopContext } from "./gameloop.context";
import {
  activeStageNumberAtom,
  activeWorldAtom,
  gameStateAtom,
  highestStageAtom,
  highestWorldAtom,
} from "../game-state/game-state.atoms";
import type { EnemyStats } from "../enemy/enemy.types";

export const GameLoopProvider = ({ children }: { children: ReactNode }) => {
  const playerStats = useAtomValue(playerStatsAtom);
  const activeWorldEnemyPool = useAtomValue(activeWorldAtom).enemyPool;
  const highestStageNumber = useAtomValue(highestStageAtom);
  const highestWorldNumber = useAtomValue(highestWorldAtom);

  const [activeEnemy, setActiveEnemy] = useAtom(activeEnemyAtom);
  const [activeStageNumber, setActiveStageNumber] = useAtom(
    activeStageNumberAtom
  );
  // const [highscore, setHighscore] = useAtom(highscoreAtom);

  const setPlayerTotalEnergyEarned = useSetAtom(playerTotalEnergyEarnedAtom);
  const setPlayerCurrencies = useSetAtom(playerCurrenciesAtom);
  const setPlayerHealth = useSetAtom(playerCurrentHealthAtom);
  const setGameState = useSetAtom(gameStateAtom);

  const [resetTrigger, setResetTrigger] = useState(0);

  const handleEnemyDeath = useCallback(
    (enemy: EnemyStats) => {
      setPlayerCurrencies((curr) => curr + enemy.currencyDropReward);
      setPlayerTotalEnergyEarned((total) => total + enemy.currencyDropReward);
      setActiveStageNumber(activeStageNumber + 1);

      // Get random enemy from pool
      const enemyKeys = Object.keys(activeWorldEnemyPool);
      const randomIndex = Math.floor(Math.random() * enemyKeys.length);
      const newEnemyKey = enemyKeys[randomIndex];

      setResetTrigger((prev) => prev + 1);

      return {
        ...activeWorldEnemyPool[newEnemyKey],
        currentHealth: activeWorldEnemyPool[newEnemyKey].health,
      };
    },
    [
      setPlayerCurrencies,
      setPlayerTotalEnergyEarned,
      setActiveStageNumber,
      activeStageNumber,
      activeWorldEnemyPool,
    ]
  );

  const handlePlayerDeath = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      highestStageNumber: Math.max(highestStageNumber, activeStageNumber - 1),
      highestWorldNumber: Math.max(highestWorldNumber, prev.activeWorldNumber),
    }));
    setActiveStageNumber(1);
    setActiveEnemy(activeWorldEnemyPool[Object.keys(activeWorldEnemyPool)[0]]);
    setResetTrigger((prev) => prev + 1);
    return playerStats.totalHealth;
  }, [
    setGameState,
    setActiveStageNumber,
    setActiveEnemy,
    activeWorldEnemyPool,
    playerStats.totalHealth,
    highestStageNumber,
    activeStageNumber,
    highestWorldNumber,
  ]);

  const handlePlayerAttack = useCallback(() => {
    setActiveEnemy((prev) => {
      const newHealth = prev.currentHealth - playerStats.totalAttackDamage;
      if (newHealth <= 0) return handleEnemyDeath(prev);

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
