import { useAtomValue } from "jotai";
import { Counter } from "../components/counter";
import { playerCurrenciesAtom } from "../features/player/player.atoms";

export const PageHeader = () => {
  const energy = useAtomValue(playerCurrenciesAtom);

  return (
    <div>
      <Counter name={"Energy"} value={energy} />
    </div>
  );
};
