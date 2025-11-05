import type { ModifierTypes } from "../player/player.types";

export type UpgradeType = {
  currentUpgrades: number;
  totalUpgrades: number;
  value: number;
  type: ModifierTypes;
  cap: number;
  cost: number;
};
