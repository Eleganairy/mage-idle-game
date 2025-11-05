import { atom } from "jotai";
import type { UpgradeType } from "./upgrades.types";
import { ModifierTypes } from "../player/player.types";

export const MainAttackUpgradeAtom = atom<UpgradeType>({
  currentUpgrades: 0,
  totalUpgrades: 10,
  value: 1,
  type: ModifierTypes.ADDITIVE,
  cap: 10,
  cost: 5,
});
