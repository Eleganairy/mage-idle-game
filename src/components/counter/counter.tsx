import { useAtomValue } from "jotai";
import { Paragraph } from "../paragraph";
import { playerCurrencyAtom } from "../../features/player/player.atoms";

export const Counter = () => {
  const playerCurrency = useAtomValue(playerCurrencyAtom);

  return <Paragraph text={playerCurrency?.toString()} size={"counter"} />;
};
