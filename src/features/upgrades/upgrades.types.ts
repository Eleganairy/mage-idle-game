import type { ModifierTypes } from "../player/player.types";

export type UpgradeType = {
  name: Upgrades;
  currentUpgrades: number;
  upgradesCap: number;
  upgradeValue: number;
  type: ModifierTypes;
  cost: number;
};

export enum Upgrades {
  ATTACK_DAMAGE = "ATTACK_DAMAGE",
  ATTACK_SPEED = "ATTACK_SPEED",
  HEALTH = "HEALTH",
}
