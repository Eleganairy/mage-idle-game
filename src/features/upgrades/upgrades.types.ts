import type { ModifierTypes } from "../player/player.types";

export type Upgrade = {
  name: string;
  type: UpgradeTypes;
  currentUpgrades: number;
  upgradesCap: number;
  startingValue?: number;
  upgradeValue: number;
  modifierType: ModifierTypes;
  cost: number;
  costMultiplier: number;
  icon: string;
};

export enum UpgradeTypes {
  ATTACK_DAMAGE = "ATTACK_DAMAGE",
  ATTACK_SPEED = "ATTACK_SPEED",
  HEALTH = "HEALTH",
}
