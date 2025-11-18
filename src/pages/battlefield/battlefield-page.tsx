import { Box, Button, Stack } from "@mui/material";
import { Player } from "../../components/player";
import { Enemy } from "../../components/enemy";
import { Paragraph } from "../../components/paragraph";
import { useAtomValue, useSetAtom } from "jotai";
import {
  activeStageNumberAtom,
  activeWorldAtom,
  highestStageAtom,
  highestWorldAtom,
  nextWorldAtom,
} from "../../features/game-state/game-state.atoms";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { gameWorlds } from "../../features/game-state/game-state.constants";

export const BattlefieldPage = () => {
  const activeStageNumber = useAtomValue(activeStageNumberAtom);
  const activeWorld = useAtomValue(activeWorldAtom);
  const highestStageNumber = useAtomValue(highestStageAtom);
  const highestWorldNumber = useAtomValue(highestWorldAtom);

  const goToNextWorld = useSetAtom(nextWorldAtom);

  // Calculate remaining stages needed
  const remainingStages = Math.max(
    0,
    activeWorld.requiredNumberOfStages - activeStageNumber
  );

  const nextWorldExists = gameWorlds[activeWorld.worldNumber] !== undefined; // Check if next world exists

  const handleNextWorld = () => {
    if (remainingStages > 0) return;
    goToNextWorld(); // This handles both world change and enemy reset
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
            {nextWorldExists && (
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
            )}
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
