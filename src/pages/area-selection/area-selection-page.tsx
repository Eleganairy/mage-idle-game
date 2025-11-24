import { Box, Grid } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import {
  activeAreaAtom,
  gameStateAtom,
  unlockedAreasAtom,
} from "../../features/game-state/game-state.atoms";
import { gameAreas } from "../../features/game-state/game-state.constants";
import type { Area } from "../../features/game-state/game-state.types";
import { activeEnemyAtom } from "../../features/enemy/enemy.atoms";
import { AreaSelectionBlock } from "./area-selection-block";
import { getRandomEnemy } from "../../features/enemy/helpers/random-enemy-generator.helpers";

export const AreaSelectionPage = () => {
  const activeArea = useAtomValue(activeAreaAtom);
  const highestUnlockedArea = useAtomValue(unlockedAreasAtom);

  const setGameState = useSetAtom(gameStateAtom);
  const setActiveEnemy = useSetAtom(activeEnemyAtom);

  const setArea = (area: Area) => {
    // Update game state with area number
    setGameState((prev) => ({
      ...prev,
      activeAreaNumber: area.AreaNumber,
      activeStageNumber: 1, // Reset stage when changing areas
    }));

    // Set a random enemy from the new area's pool
    if (area.enemyPool) {
      const newEnemy = getRandomEnemy(area.enemyPool);
      setActiveEnemy(newEnemy);
    }
  };

  const getBlockState = (area: Area): "active" | "unlocked" | "locked" => {
    if (activeArea.AreaNumber === area.AreaNumber) {
      return "active";
    }
    // Allow access to all areas up to and including highestArea
    // This allows players to go back to previous areas AND return to their highest unlocked area
    if (area.AreaNumber <= highestUnlockedArea) {
      return "unlocked";
    }
    return "locked";
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {gameAreas.map((area) => {
          return (
            <Grid size={{ xs: 12, md: 12 }} key={area.AreaNumber}>
              <AreaSelectionBlock
                Area={area}
                blockState={getBlockState(area)}
                setArea={setArea}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
