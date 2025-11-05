import { useAtomValue } from "jotai";
import { Paragraph } from "../paragraph";
import { playerStatsAtom } from "../../features/player/player.atoms";

export const Counter = () => {
  const playerMoney = useAtomValue(playerStatsAtom).money;

  return <Paragraph text={playerMoney?.toString()} size={"counter"} />;
};
