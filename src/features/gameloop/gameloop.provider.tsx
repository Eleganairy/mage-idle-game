import { type ReactNode, useCallback, useState } from "react";
import { useGameLoop } from "./gameloop.hooks";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { activeEnemyAtom } from "../enemy/enemy.atoms";
import {
  playerStatsAtom,
  playerCurrentHealthAtom,
} from "../player/player.atoms";
import { playerCurrenciesAtom } from "../player/player.atoms";
import { GameLoopContext } from "./gameloop.context";
import {
  activeStageNumberAtom,
  activeWorldAtom,
  activeWorldEnemyPoolAtom,
  highestScoreAtom,
} from "../game-state/game-state.atoms";
import { gameWorlds } from "../game-state/game-state.constants";

export const GameLoopProvider = ({ children }: { children: ReactNode }) => {
  const playerStats = useAtomValue(playerStatsAtom);
  const activeEnemyPool = useAtomValue(activeWorldEnemyPoolAtom);

  const [activeEnemy, setActiveEnemy] = useAtom(activeEnemyAtom);
  const [activeStageNumber, setActiveStageNumber] = useAtom(
    activeStageNumberAtom
  );
  const [activeWorld, setActiveWorld] = useAtom(activeWorldAtom);

  const setPlayerCurrencies = useSetAtom(playerCurrenciesAtom);
  const setPlayerHealth = useSetAtom(playerCurrentHealthAtom);
  const setHighscore = useSetAtom(highestScoreAtom);

  const [resetTrigger, setResetTrigger] = useState(0);

  const handlePlayerAttack = useCallback(() => {
    setActiveEnemy((prev) => {
      const newHealth = prev.currentHealth - playerStats.totalAttackDamage;
      if (newHealth <= 0) {
        setPlayerCurrencies((curr) => curr + prev.currencyDropReward);
        setActiveStageNumber((stage) => {
          return activeWorld.requiredNumberOfStages === stage
            ? stage
            : stage + 1;
        });

        const randomIndex = Math.floor(
          Math.random() * Object.keys(activeEnemyPool).length
        );
        const newEnemyKey = Object.keys(activeEnemyPool)[randomIndex];

        return {
          ...activeEnemyPool[newEnemyKey],
          currentHealth: activeEnemyPool[newEnemyKey].health,
        };
      }
      return {
        ...prev,
        currentHealth: newHealth,
      };
    });
  }, [
    setActiveEnemy,
    playerStats.totalAttackDamage,
    setPlayerCurrencies,
    setActiveStageNumber,
    activeEnemyPool,
    activeWorld.requiredNumberOfStages,
  ]);

  const handleEnemyAttack = useCallback(() => {
    setPlayerHealth((prev) => {
      const newHealth = prev - activeEnemy.attackDamage;
      if (newHealth <= 0) {
        setHighscore((prevHighscore) => [
          Math.max(prevHighscore[0], activeWorld.worldNumber),
          Math.max(prevHighscore[1], activeStageNumber),
        ]);
        setActiveStageNumber(1);
        setActiveWorld(gameWorlds[0]);

        setResetTrigger((prev) => prev + 1);
        return playerStats.totalHealth;
      }
      return newHealth;
    });
  }, [
    setPlayerHealth,
    activeEnemy.attackDamage,
    setHighscore,
    setActiveStageNumber,
    setActiveWorld,
    playerStats.totalHealth,
    activeWorld.worldNumber,
    activeStageNumber,
  ]);

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
