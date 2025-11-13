import { atom } from "jotai";
import {
  PLAYER_BASE_ATTACK_DAMAGE,
  PLAYER_BASE_ATTACK_SPEED,
  PLAYER_BASE_ENERGY,
  PLAYER_BASE_HEALTH,
} from "./player.constants";
import { playerUpgradesAtom } from "../upgrades/upgrades.atoms";
import { calculateTotalValue } from "./player.helpers";
import { UpgradeTypes } from "../upgrades/upgrades.types";

export const playerCurrenciesAtom = atom<number>(PLAYER_BASE_ENERGY);

// Derived atom that calculates total stats based on upgrades
export const playerStatsAtom = atom((get) => {
  const upgrades = get(playerUpgradesAtom);

  return {
    totalHealth: calculateTotalValue(
      PLAYER_BASE_HEALTH,
      UpgradeTypes.HEALTH,
      upgrades
    ),
    totalAttackDamage: calculateTotalValue(
      PLAYER_BASE_ATTACK_DAMAGE,
      UpgradeTypes.ATTACK_DAMAGE,
      upgrades
    ),
    totalAttackSpeed: calculateTotalValue(
      PLAYER_BASE_ATTACK_SPEED,
      UpgradeTypes.ATTACK_SPEED,
      upgrades
    ),
  };
});
