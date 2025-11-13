import { useCallback, type ReactNode } from "react";
import { useGameLoop } from "./gameloop.hooks";
import { enemyStatsAtom } from "../enemy/enemy.atoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { playerCurrenciesAtom, playerStatsAtom } from "../player/player.atoms";
import { GameLoopContext } from "./gameloop.context";

export const GameLoopProvider = ({ children }: { children: ReactNode }) => {
  const [enemyStats, setEnemyStats] = useAtom(enemyStatsAtom);
  const setPlayerCurrencies = useSetAtom(playerCurrenciesAtom);
  const playerStats = useAtomValue(playerStatsAtom);

  const handleTimeEnd = useCallback(() => {
    setEnemyStats(() => {
      const newHealth =
        enemyStats.currentHealth - playerStats.totalAttackDamage;
      if (newHealth <= 0) {
        setPlayerCurrencies((prev) => prev + enemyStats.currencyDropReward);
        return {
          ...enemyStats,
          currentHealth: enemyStats.health,
        };
      }
      return {
        ...enemyStats,
        currentHealth: newHealth,
      };
    });
  }, [enemyStats, playerStats, setEnemyStats, setPlayerCurrencies]);

  const gameLoopState = useGameLoop({
    endTime: (1 / playerStats.totalAttackSpeed) * 1000,
    onTimeEnd: handleTimeEnd,
  });

  return (
    <GameLoopContext.Provider value={gameLoopState}>
      {children}
    </GameLoopContext.Provider>
  );
};
