import { atom } from "jotai";
import type { UpgradeType } from "./upgrades.types";

export const MainAttackUpgradeAtom = atom<UpgradeType>({
  currentUpgrades: 0,
  totalUpgrades: 10,
});

export const IdleAttackUpgradeAtom = atom<UpgradeType>({
  currentUpgrades: 0,
  totalUpgrades: 10,
});
