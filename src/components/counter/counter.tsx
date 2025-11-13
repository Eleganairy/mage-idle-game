import { useAtomValue } from "jotai";
import { Paragraph } from "../paragraph";
import { playerCurrenciesAtom } from "../../features/player/player.atoms";

export const Counter = () => {
  const energy = useAtomValue(playerCurrenciesAtom);

  return <Paragraph color="white" text={energy?.toString()} size={"counter"} />;
};
