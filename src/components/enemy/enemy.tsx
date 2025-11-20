import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import { useAtomValue } from "jotai";
import { activeEnemyAtom } from "../../features/enemy/enemy.atoms";
import { useGameLoopContext } from "../../features/gameloop/gameloop.context";
import { HealthBar } from "../health-bar/health-bar";
import { ProgressBar } from "../progress-bar";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { ACCENT_ERROR, LABEL_TEXT_COLOR } from "../../constants/colors";

export const Enemy = () => {
  const activeEnemy = useAtomValue(activeEnemyAtom);
  const { enemyAttackProgress } = useGameLoopContext();

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
          text={activeEnemy.name}
          size={TYPOGRAPHY_SIZES.title}
          color={LABEL_TEXT_COLOR}
        />
        <HealthBar
          current={activeEnemy.currentHealth}
          max={activeEnemy.health}
        />
        <ProgressBar progress={enemyAttackProgress} color={ACCENT_ERROR} />
      </Stack>
    </Box>
  );
};
