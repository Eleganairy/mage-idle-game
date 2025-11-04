import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import { useAtomValue } from "jotai";
import { playerStatsAtom } from "../../features/player/player.atoms";

export const Player = () => {
  const playerStats = useAtomValue(playerStatsAtom);

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
        <Paragraph text={`100 / ${playerStats.baseHealth.toString()}`} />
      </Stack>
    </Box>
  );
};
