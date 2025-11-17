import { useAtomValue } from "jotai";
import { Counter } from "../counter";
import {
  currentGenerationNumberAtom,
  playerCurrenciesAtom,
  playerTotalEnergyEarnedAtom,
} from "../../features/player/player.atoms";
import { Stack } from "@mui/material";
import { ProgressBar } from "../progress-bar";

export const PageHeader = () => {
  const energy = useAtomValue(playerCurrenciesAtom);
  const totalEnergy = useAtomValue(playerTotalEnergyEarnedAtom);
  const currentGenerationNumber = useAtomValue(currentGenerationNumberAtom);

  const generationProgress = Math.min(
    100,
    (totalEnergy / currentGenerationNumber) * 100
  );

  return (
    <Stack
      direction={"row"}
      spacing={10}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Counter name={"Energy"} value={energy} />
      <ProgressBar progress={generationProgress} color="pink" />
      <Counter name={"Total energy"} value={totalEnergy} />
    </Stack>
  );
};
