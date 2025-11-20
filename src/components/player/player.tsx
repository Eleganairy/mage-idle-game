import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import { useAtomValue } from "jotai";
import {
  playerStatsAtom,
  playerCurrentHealthAtom,
} from "../../features/player/player.atoms";
import { useGameLoopContext } from "../../features/gameloop/gameloop.context";
import { HealthBar } from "../health-bar/health-bar";
import { ProgressBar } from "../progress-bar";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { ACCENT_WARNING, LABEL_TEXT_COLOR } from "../../constants/colors";

export const Player = () => {
  const playerStats = useAtomValue(playerStatsAtom);
  const currentHealth = useAtomValue(playerCurrentHealthAtom);
  const { playerAttackProgress } = useGameLoopContext();

  return (
    <Box
      sx={{
        border: "6px solid black",
        height: "700px",
        width: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Paragraph
          text="Player"
          size={TYPOGRAPHY_SIZES.title}
          color={LABEL_TEXT_COLOR}
        />
        <HealthBar current={currentHealth} max={playerStats.totalHealth} />
        <ProgressBar progress={playerAttackProgress} color={ACCENT_WARNING} />
      </Stack>
    </Box>
  );
};
