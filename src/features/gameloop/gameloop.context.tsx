import type { ReactNode } from "react";
import { GameLoopContext, useGameLoop } from "./gameloop.hooks";
import { PLAYER_BASE_ATTACK_SPEED } from "../player/player.constants";
import { enemyStatsAtom } from "../enemy/enemy.atoms";
import { useAtom } from "jotai";
import { playerStatsAtom } from "../player/player.atoms";

export const GameLoopProvider = ({ children }: { children: ReactNode }) => {
  const [enemyStats, setEnemyStats] = useAtom(enemyStatsAtom);
  const [playerStats, setPlayerStats] = useAtom(playerStatsAtom);

  const attackProgress = useGameLoop({
    endTime: (1 / PLAYER_BASE_ATTACK_SPEED) * 1000,
    onTimeEnd: () => {
      setEnemyStats(() => {
        const newHealth =
          enemyStats.currentHealth - playerStats.totalAttackDamage;
        if (newHealth <= 0) {
          setPlayerStats((prev) => ({
            ...prev,
            energy: prev.energy + enemyStats.currencyDropReward,
          }));
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
    },
  });

  return (
    <GameLoopContext.Provider value={{ attackProgress }}>
      {children}
    </GameLoopContext.Provider>
  );
};
