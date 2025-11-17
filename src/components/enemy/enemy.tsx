import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import { useAtomValue } from "jotai";
import { activeEnemyAtom } from "../../features/enemy/enemy.atoms";
import { useGameLoopContext } from "../../features/gameloop/gameloop.context";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";

export const Enemy = () => {
  const activeEnemy = useAtomValue(activeEnemyAtom);
  const { enemyAttackProgress } = useGameLoopContext();

  const healthPercentage = () =>
    (activeEnemy.currentHealth / activeEnemy.health) * 200;

  const playerAttackProgressPercentage = () =>
    (enemyAttackProgress / 100) * 100;

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
        <Paragraph text={activeEnemy.name} size={TYPOGRAPHY_SIZES.title} />
        <Box sx={{ border: "2px solid black", width: "200px", height: "20px" }}>
          <Box
            sx={{
              backgroundColor: "green",
              width: `${healthPercentage()}px`,
              height: "20px",
            }}
          />
        </Box>
        <Paragraph
          size={TYPOGRAPHY_SIZES.label}
          text={`${activeEnemy.currentHealth} / ${activeEnemy.health}`}
        />
        <Box sx={{ border: "2px solid black", width: "200px", height: "20px" }}>
          <Box
            sx={{
              backgroundColor: "red",
              width: `${playerAttackProgressPercentage()}%`,
              height: "20px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
