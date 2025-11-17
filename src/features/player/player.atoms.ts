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

// Track current player health
export const playerCurrentHealthAtom = atom<number>(PLAYER_BASE_HEALTH);

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

// Atom to track previous max health
const previousMaxHealthAtom = atom(PLAYER_BASE_HEALTH);

// Write-only atom that automatically increases current health when max health increases
export const syncHealthOnUpgradeAtom = atom(null, (get, set) => {
  const currentMaxHealth = get(playerStatsAtom).totalHealth;
  const previousMaxHealth = get(previousMaxHealthAtom);
  const healthIncrease = currentMaxHealth - previousMaxHealth;

  if (healthIncrease > 0) {
    // Increase current health by the same amount max health increased
    set(playerCurrentHealthAtom, (prev) => prev + healthIncrease);
  }

  // Update previous max health
  set(previousMaxHealthAtom, currentMaxHealth);
});
