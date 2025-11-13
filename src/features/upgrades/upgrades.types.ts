import type { ModifierTypes } from "../player/player.types";

export type Upgrade = {
  name: string;
  currentUpgrades: number;
  upgradesCap: number;
  startingValue?: number;
  upgradeValue: number;
  type: UpgradeTypes;
  modifierType: ModifierTypes;
  cost: number;
  icon: string;
};

export enum UpgradeTypes {
  ATTACK_DAMAGE = "ATTACK_DAMAGE",
  ATTACK_SPEED = "ATTACK_SPEED",
  HEALTH = "HEALTH",
}
