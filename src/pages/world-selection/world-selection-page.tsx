import { Box, Grid } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import {
  activeWorldAtom,
  gameStateAtom,
} from "../../features/game-state/game-state.atoms";
import { gameWorlds } from "../../features/game-state/game-state.constants";

export const WorldSelectionPage = () => {
  const activeWorld = useAtomValue(activeWorldAtom);

  const setGameState = useSetAtom(gameStateAtom);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {gameWorlds.map((world) => {
          return (
            <Grid size={{ xs: 12, md: 6 }} key={world.worldNumber}>
              <Box
                sx={{
                  border:
                    activeWorld.worldNumber === world.worldNumber
                      ? "2px solid blue"
                      : "1px solid gray",
                  borderRadius: 2,
                  padding: 2,
                  cursor: "pointer",
                }}
                onClick={() =>
                  setGameState((prev) => ({
                    ...prev,
                    activeWorld: world,
                  }))
                }
              >
                <h3>World {world.worldNumber}</h3>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
