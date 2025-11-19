import { type Upgrade, UpgradeTypes } from "./upgrades.types";
import { ModifierTypes } from "../player/player.types";

export const BASE_PLAYER_UPGRADES: Upgrade[] = [
  {
    name: "Stronger bones",
    type: UpgradeTypes.ATTACK_DAMAGE,
    cost: 5, // Set initial cost
    costMultiplier: 1.3,
    upgradeValue: 1,
    modifierType: ModifierTypes.ADDITIVE,
    currentUpgrades: 0,
    upgradesCap: 20,
    icon: "../../../sword.png",
  },
  {
    name: "Faster reflexes",
    type: UpgradeTypes.ATTACK_SPEED,
    cost: 10, // Set initial cost
    costMultiplier: 1.3,
    upgradeValue: 10,
    modifierType: ModifierTypes.PERCENTILE,
    currentUpgrades: 0,
    upgradesCap: 10,
    icon: "../../../speed.png",
  },
  {
    name: "Tougher skin",
    type: UpgradeTypes.HEALTH,
    cost: 20, // Set initial cost
    costMultiplier: 1.8,
    upgradeValue: 0.2,
    modifierType: ModifierTypes.MULTIPLICATIVE,
    currentUpgrades: 0,
    upgradesCap: 5,
    icon: "../../../heart.png",
  },
];
