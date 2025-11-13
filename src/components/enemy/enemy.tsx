import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import { useAtomValue } from "jotai";
import { enemyStatsAtom } from "../../features/enemy/enemy.atoms";
import { useGameLoopContext } from "../../features/gameloop/gameloop.context";

export const Enemy = () => {
  const enemyStats = useAtomValue(enemyStatsAtom);
  const { attackProgress } = useGameLoopContext();

  const healthPercentage = () =>
    (enemyStats.currentHealth / enemyStats.health) * 200;

  const attackProgressPercentage = () => (attackProgress / 100) * 100;

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
        <Paragraph
          text={`${enemyStats.currentHealth} / ${enemyStats.health}`}
        />
        <Box sx={{ border: "2px solid black", width: "200px", height: "20px" }}>
          <Box
            sx={{
              backgroundColor: "orange",
              width: `${attackProgressPercentage()}%`,
              height: "20px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
