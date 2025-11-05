import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import { useAtom, useAtomValue } from "jotai";
import { playerStatsAtom } from "../../features/player/player.atoms";
import { enemyStatsAtom } from "../../features/enemy/enemy.atoms";
import { useState } from "react";
import { useGameLoop } from "../../features/gameloop/gameloop.hooks";
import { useUpgradedStat } from "../../features/player/player.hooks";

export const Enemy = () => {
  const enemyStats = useAtomValue(enemyStatsAtom);
  const [playerStats, setPlayerStats] = useAtom(playerStatsAtom);

  const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(
    enemyStats.health
  );

  const handleAttack = (damage: number) => {
    setEnemyCurrentHealth((health) => {
      const newHealth = health - damage;
      if (newHealth <= 0) {
        setPlayerStats((prev) => ({
          ...prev,
          money: prev.money + enemyStats.currencyDropReward,
        }));
        return enemyStats.health;
      }

      return newHealth;
    });
  };

  const totalAttackDamage = useUpgradedStat(
    playerStats.baseAttackDamage,
    playerStats.attackDamageModifiers
  );

  const attackProgress = useGameLoop({
    endTime: (1 / playerStats.baseAttackSpeed) * 1000,
    onTimeEnd: () => handleAttack(totalAttackDamage),
  });

  const healthPercentage = () => (enemyCurrentHealth / enemyStats.health) * 200;

  const attackProgressPercentage = () => (attackProgress / 100) * 200;

  return (
    <Box
      sx={{
        border: "3px solid black",
        height: "700px",
        width: "400px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} alignItems={"center"}>
        <Box sx={{ border: "2px solid black", width: "200px", height: "20px" }}>
          <Box
            sx={{
              backgroundColor: "green",
              width: `${healthPercentage()}px`,
              height: "20px",
            }}
          />
        </Box>
        <Paragraph text={`${enemyCurrentHealth} / ${enemyStats.health}`} />
        <Box sx={{ border: "2px solid black", width: "200px", height: "20px" }}>
          <Box
            sx={{
              backgroundColor: "orange",
              width: `${attackProgressPercentage()}px`,
              height: "20px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
