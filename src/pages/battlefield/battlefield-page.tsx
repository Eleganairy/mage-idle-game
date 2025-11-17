import { Box, Button, Stack } from "@mui/material";
import { Player } from "../../components/player";
import { Enemy } from "../../components/enemy";
import { Paragraph } from "../../components/paragraph";
import { useAtomValue, useSetAtom } from "jotai";
import {
  activeStageNumberAtom,
  activeWorldAtom,
  gameStateAtom,
  highestStageAtom,
  highestWorldAtom,
} from "../../features/game-state/game-state.atoms";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";

export const BattlefieldPage = () => {
  const activeStageNumber = useAtomValue(activeStageNumberAtom);
  const activeWorld = useAtomValue(activeWorldAtom);
  const highestStageNumber = useAtomValue(highestStageAtom);
  const highestWorldNumber = useAtomValue(highestWorldAtom);

  const setGameState = useSetAtom(gameStateAtom);

  // Calculate remaining stages needed
  const remainingStages = Math.max(
    0,
    activeWorld.requiredNumberOfStages - activeStageNumber
  );

  const handleNextWorld = () => {
    if (remainingStages > 0) return; // Do nothing if requirements not met

    //the currentWorldNumber is already one number ahead since JavaScript counts from 0 and I start with world 1
    setGameState((prev) => ({
      ...prev,
      activeWorldNumber: prev.activeWorldNumber + 1,
      activeStageNumber: 1,
    })); // Reset stage counter for new world
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ margin: 5 }}
      >
        <Player />
        <Stack justifyContent={"space-between"}>
          <Box>
            <Paragraph
              text={`Current World: ${activeWorld.worldNumber}`}
              size={TYPOGRAPHY_SIZES.button}
            />
            <Button
              variant="contained"
              onClick={handleNextWorld}
              disabled={remainingStages > 0}
              sx={{
                height: "90px",
                width: "280px",
                border: "4px solid black",
                borderRadius: 0,
                backgroundColor: remainingStages > 0 ? "gray" : "darkred",
                fontFamily: "Pixelify Sans",
                fontSize: TYPOGRAPHY_SIZES.paragraph,
                marginTop: 3,
              }}
            >
              {remainingStages > 0
                ? `Complete ${remainingStages} more stages`
                : "Next World"}
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Paragraph
              text={`Stage ${activeStageNumber}`}
              size={TYPOGRAPHY_SIZES.label}
            />
            <Paragraph
              text={`Highscore: ${highestWorldNumber} - ${highestStageNumber}`}
              size={TYPOGRAPHY_SIZES.label}
            />
          </Box>
          <div />
        </Stack>
        <Enemy />
      </Stack>
    </Box>
  );
};
