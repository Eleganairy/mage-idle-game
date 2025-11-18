import { Box, Grid } from "@mui/material";
import { slainEnemiesCountAtom } from "../../features/enemy/enemy.atoms";
import { useAtomValue } from "jotai";

export const Pokedex = () => {
  const slainEnemiesCount = useAtomValue(slainEnemiesCountAtom);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {Object.entries(slainEnemiesCount).map(([name, value]) => {
          return (
            <Grid size={{ xs: 6, md: 2 }} key={name}>
              <Box>
                <h3>{name}</h3>
                <p>Slain Count: {value}</p>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
