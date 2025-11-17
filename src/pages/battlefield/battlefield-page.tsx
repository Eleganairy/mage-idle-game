import { Box, Stack } from "@mui/material";
import { Player } from "../../components/player";
import { Enemy } from "../../components/enemy";
import { Paragraph } from "../../components/paragraph";
import { useAtom, useAtomValue } from "jotai";
import {
  activeStageNumberAtom,
  activeWorldAtom,
  highestScoreAtom,
} from "../../features/game-state/game-state.atoms";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { gameWorlds } from "../../features/game-state/game-state.constants";

export const BattlefieldPage = () => {
  const currentStageNumber = useAtomValue(activeStageNumberAtom);
  const highscore = useAtomValue(highestScoreAtom);

  const [currentWorld, setCurrentWorld] = useAtom(activeWorldAtom);

  const requirementSucceeded =
    currentWorld.requiredNumberOfStages - currentStageNumber + 1 === 0;

  const getRequiredStageClears = (): string => {
    if (!requirementSucceeded)
      return (
        currentWorld.requiredNumberOfStages -
        currentStageNumber +
        1
      ).toString();

    return "Continue";
  };

  const handleNextWorld = () => {
    if (requirementSucceeded)
      //the currentWorldNumber is already one number ahead since JavaScript counts from 0 and I start with world 1
      setCurrentWorld(gameWorlds[currentWorld.worldNumber]);
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
          <button
            onClick={handleNextWorld}
            style={{
              width: "240px",
              height: "80px",
              fontSize: TYPOGRAPHY_SIZES.button,
              fontWeight: "bold",
              backgroundColor: requirementSucceeded ? "darkgreen" : "darkred",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {getRequiredStageClears()}
          </button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Paragraph
              text={`Stage ${currentStageNumber}`}
              size={TYPOGRAPHY_SIZES.label}
            />
            <Paragraph
              text={`Highscore: ${highscore[0]} - ${highscore[1]}`}
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
