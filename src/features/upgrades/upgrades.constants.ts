import { ModifierTypes } from "../player/player.types";
import { UpgradeTypes } from "./upgrades.types";

export const BASE_PLAYER_UPGRADES = [
  {
    name: "Stronger jaws",
    currentUpgrades: 0,
    upgradesCap: 20,
    upgradeValue: 1,
    type: UpgradeTypes.ATTACK_DAMAGE,
    modifierType: ModifierTypes.ADDITIVE,
    cost: 1,
    icon: "../../../Sword_Pixel_art.png",
  },
  {
    name: "Faster reflexes",
    currentUpgrades: 0,
    upgradesCap: 20,
    upgradeValue: 10,
    type: UpgradeTypes.ATTACK_SPEED,
    modifierType: ModifierTypes.PERCENTILE,
    cost: 2,
    icon: "../../../Running_Pixelart.png",
  },
  {
    name: "Heavier bones",
    currentUpgrades: 0,
    upgradesCap: 10,
    startingValue: 1,
    upgradeValue: 0.2,
    type: UpgradeTypes.HEALTH,
    modifierType: ModifierTypes.MULTIPLICATIVE,
    cost: 5,
    icon: "../../../Heart_pixelart.png",
  },
];
