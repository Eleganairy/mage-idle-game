import { Box, Button, Stack } from "@mui/material";
import { Player } from "../../components/player";
import { Enemy } from "../../components/enemy";
import { Paragraph } from "../../components/paragraph";
import { useAtomValue, useSetAtom } from "jotai";
import {
  activeStageNumberAtom,
  activeAreaAtom,
  highestStageAtom,
  highestAreaAtom,
  nextAreaAtom,
} from "../../features/game-state/game-state.atoms";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { gameAreas } from "../../features/game-state/game-state.constants";
import * as Colors from "../../constants/colors";

export const BattlefieldPage = () => {
  const activeStageNumber = useAtomValue(activeStageNumberAtom);
  const activeArea = useAtomValue(activeAreaAtom);
  const highestStageNumber = useAtomValue(highestStageAtom);
  const highestAreaNumber = useAtomValue(highestAreaAtom);

  const goToNextArea = useSetAtom(nextAreaAtom);

  // Calculate remaining stages needed
  const remainingStages = Math.max(
    0,
    activeArea.requiredNumberOfStages - activeStageNumber
  );

  const nextAreaExists = gameAreas[activeArea.AreaNumber] !== undefined; // Check if next Area exists

  const handleNextArea = () => {
    if (remainingStages > 0) return;
    goToNextArea(); // This handles both Area change and enemy reset
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
              text={`Current Area: ${activeArea.AreaNumber}`}
              size={TYPOGRAPHY_SIZES.button}
            />
            {nextAreaExists && (
              <Button
                variant="contained"
                onClick={handleNextArea}
                disabled={remainingStages > 0}
                sx={{
                  height: "90px",
                  width: "280px",
                  border: "4px solid black",
                  borderRadius: 0,
                  color:
                    remainingStages > 0
                      ? Colors.DISABLED_TEXT_COLOR
                      : Colors.DARK_TEXT_COLOR,
                  backgroundColor:
                    remainingStages > 0
                      ? Colors.DISABLED_OVERLAY
                      : Colors.ACCENT_WARNING,
                  fontFamily: "Pixelify Sans",
                  fontSize: TYPOGRAPHY_SIZES.paragraph,
                  marginTop: 3,
                }}
              >
                {remainingStages > 0
                  ? `Complete ${remainingStages} more stages`
                  : "Next Area"}
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
              text={`Highscore: ${highestAreaNumber} - ${highestStageNumber}`}
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
