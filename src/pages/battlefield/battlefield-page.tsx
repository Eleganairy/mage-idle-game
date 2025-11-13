import { Box, Stack } from "@mui/material";
import { Player } from "../../components/player";
import { Enemy } from "../../components/enemy";

export const BattlefieldPage = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ margin: 5 }}
      >
        <Player />
        <Enemy />
      </Stack>
    </Box>
  );
};
