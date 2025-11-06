import { atom } from "jotai";
import { Upgrades, type UpgradeType } from "./upgrades.types";
import { ModifierTypes } from "../player/player.types";

export const playerUpgradesAtom = atom<Array<UpgradeType>>([
  {
    name: Upgrades.ATTACK_DAMAGE,
    currentUpgrades: 0,
    upgradesCap: 20,
    upgradeValue: 1,
    type: ModifierTypes.ADDITIVE,
    cost: 1,
  },
  {
    name: Upgrades.ATTACK_SPEED,
    currentUpgrades: 0,
    upgradesCap: 20,
    upgradeValue: 10,
    type: ModifierTypes.PERCENTILE,
    cost: 2,
  },
  {
    name: Upgrades.HEALTH,
    currentUpgrades: 0,
    upgradesCap: 10,
    upgradeValue: 0.2,
    type: ModifierTypes.MULTIPLICATIVE,
    cost: 5,
  },
]);
