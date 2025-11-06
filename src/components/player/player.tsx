import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import {
  PLAYER_BASE_ATTACK_DAMAGE,
  PLAYER_BASE_HEALTH,
} from "../../features/player/player.constants";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { playerStatsAtom } from "../../features/player/player.atoms";
import { calculateTotalValue } from "../../features/player/player.hooks";

export const Player = () => {
  const [playerStats, setPlayerStats] = useAtom(playerStatsAtom);

  useEffect(() => {
    setPlayerStats((prev) => ({
      ...prev,
      totalAttackDamage: calculateTotalValue(
        PLAYER_BASE_ATTACK_DAMAGE,
        playerStats.attackDamageModifiers
      ),
    }));
  }, [playerStats.attackDamageModifiers, setPlayerStats]);

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
      <Stack spacing={1} sx={{ alignItems: "center" }}>
        <Paragraph text={"Player"} size="large" />
        <Paragraph text={`100 / ${PLAYER_BASE_HEALTH.toString()}`} />
      </Stack>
    </Box>
  );
};
