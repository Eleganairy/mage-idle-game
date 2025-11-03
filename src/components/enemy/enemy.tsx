import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import { useAtomValue, useSetAtom } from "jotai";
import {
  playerCurrencyAtom,
  playerStatsAtom,
} from "../../features/player/player.atoms";
import { enemyStatsAtom } from "../../features/enemy/enemy.atoms";
import { idleStatsAtom } from "../../features/idle/idle.atoms";
import { useAttack } from "../../features/enemy/enemy.helpers";
import { useState } from "react";

export const Enemy = () => {
  const setPlayerCurrency = useSetAtom(playerCurrencyAtom);
  const enemyStats = useAtomValue(enemyStatsAtom);
  const playerStats = useAtomValue(playerStatsAtom);
  const idleStats = useAtomValue(idleStatsAtom);

  const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(
    enemyStats.health
  );
  const [playerIsAttacking, setPlayerIsAttacking] = useState(false);

  const handleAttack = (damage: number) => {
    setEnemyCurrentHealth((health) => {
      const newHealth = health - damage;

      if (newHealth <= 0) {
        setPlayerCurrency((curr) => curr + enemyStats.currencyDropReward);
        return enemyStats.health;
      }

      return newHealth;
    });
  };

  const playerAttackProgress = useAttack({
    attackSpeed: playerStats.attackSpeed,
    isAttacking: playerIsAttacking,
    onAttackComplete: () => handleAttack(playerStats.attackDamage),
  });

  const idleAttackProgress = useAttack({
    attackSpeed: idleStats.attackSpeed,
    isAttacking: true, // Always running
    onAttackComplete: () => handleAttack(idleStats.attackDamage),
  });

  const healthPercentage = () => (enemyCurrentHealth / enemyStats.health) * 200;

  const attackProgressPercentage = () => (playerAttackProgress / 100) * 200;

  const idleAttackProgressPercentage = () => (idleAttackProgress / 100) * 200;

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
      onMouseDown={() => setPlayerIsAttacking(true)}
      onMouseUp={() => setPlayerIsAttacking(false)}
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
        <Box sx={{ border: "2px solid black", width: "200px", height: "20px" }}>
          <Box
            sx={{
              backgroundColor: "darkred",
              width: `${idleAttackProgressPercentage()}px`,
              height: "20px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
