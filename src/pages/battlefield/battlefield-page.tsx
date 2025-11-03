import { Box, Stack } from "@mui/material";
import { Player } from "../../components/player";
import { Enemy } from "../../components/enemy";
import { Counter } from "../../components/counter";

export const BattlefieldPage = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ margin: 5 }}
      >
        <Player />
        <Counter />
        <Enemy />
      </Stack>
    </Box>
  );
};
