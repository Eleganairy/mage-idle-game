import { Upgrades, type UpgradeType } from "./upgrades.types";
import type { PlayerStats } from "../player/player.types";

export const updatedPlayerUpgrades = (
  name: Upgrades,
  upgrade: UpgradeType,
  playerStats: PlayerStats,
  playerUpgrades: UpgradeType[]
) => {
  // Applies the correct upgrade to the player's stats
  switch (name) {
    case Upgrades.ATTACK_DAMAGE:
      // Updates the player's attack damage modifier
      return {
        ...playerStats,
        energy: playerStats.energy - upgrade.cost,
        attackDamageModifiers: playerUpgrades.map((modifier) => {
          if (modifier.name === Upgrades.ATTACK_DAMAGE) {
            return {
              ...modifier,
              tier: upgrade.currentUpgrades + 1,
              value: upgrade.upgradeValue + 1,
            };
          }
          return modifier;
        }),
      };
    case Upgrades.ATTACK_SPEED:
      // Updates the player's attack speed modifier
      return {
        ...playerStats,
        attackDamageModifiers: playerUpgrades.map((modifier) => {
          if (modifier.name === Upgrades.ATTACK_SPEED) {
            return {
              ...modifier,
              tier: upgrade.currentUpgrades + 1,
              value: upgrade.upgradeValue + 0.2,
            };
          }
          return modifier;
        }),
      };
    case Upgrades.HEALTH:
      // Updates the player's health modifier
      return {
        ...playerStats,
        attackDamageModifiers: playerUpgrades.map((modifier) => {
          if (modifier.name === Upgrades.HEALTH) {
            return {
              ...modifier,
              tier: upgrade.currentUpgrades + 1,
              value: upgrade.upgradeValue + 10,
            };
          }
          return modifier;
        }),
      };
  }
};

export const updatedPlayerStats = (
  name: Upgrades,
  playerUpgrades: UpgradeType[],
  playerStats: PlayerStats
) => {
  return playerUpgrades.map((upgrade) => {
    // Gets the correct upgrade from the upgrades array
    if (upgrade.name === name) {
      // Checks if the upgrade can be applied
      if (
        upgrade.currentUpgrades >= upgrade.upgradesCap ||
        playerStats.energy < upgrade.cost
      )
        return upgrade;
      // Applies the upgrade
      return {
        ...upgrade,
        currentUpgrades: upgrade.currentUpgrades + 1,
        upgradeValue: upgrade.upgradeValue,
      };
    }
    // Returns the upgrade unchanged if it's not the one being updated
    return upgrade;
  });
};
