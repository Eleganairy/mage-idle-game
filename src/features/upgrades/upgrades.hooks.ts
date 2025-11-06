import { Upgrades, type UpgradeType } from "./upgrades.types";
import type { PlayerStats } from "../player/player.types";

export const updatedPlayerStats = (
  name: Upgrades,
  upgrade: UpgradeType,
  playerStats: PlayerStats
) => {
  // Applies the correct upgrade to the player's stats
  switch (name) {
    case Upgrades.ATTACK_DAMAGE:
      // Updates the player's attack damage modifier
      return {
        ...playerStats,
        money: playerStats.money - upgrade.cost,
        attackDamageModifiers: playerStats.attackDamageModifiers.map(
          (modifier) => {
            if (modifier.name === "Attack Damage Upgrade") {
              return {
                ...modifier,
                tier: upgrade.currentUpgrades + 1,
                value: upgrade.upgradeValue + 1,
              };
            }
            return modifier;
          }
        ),
      };
    case Upgrades.ATTACK_SPEED:
      // Updates the player's attack speed modifier
      return {
        ...playerStats,
        attackDamageModifiers: playerStats.attackDamageModifiers.map(
          (modifier) => {
            if (modifier.name === "Attack Speed Upgrade") {
              return {
                ...modifier,
                tier: upgrade.currentUpgrades + 1,
                value: upgrade.upgradeValue + 0.2,
              };
            }
            return modifier;
          }
        ),
      };
    case Upgrades.HEALTH:
      // Updates the player's health modifier
      return {
        ...playerStats,
        attackDamageModifiers: playerStats.attackDamageModifiers.map(
          (modifier) => {
            if (modifier.name === "Health Upgrade") {
              return {
                ...modifier,
                tier: upgrade.currentUpgrades + 1,
                value: upgrade.upgradeValue + 10,
              };
            }
            return modifier;
          }
        ),
      };
  }
};

export const updatedPlayerUpgrades = (
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
        playerStats.money < upgrade.cost
      )
        return upgrade;
      // Applies the upgrade
      return {
        ...upgrade,
        currentUpgrades: upgrade.currentUpgrades + 1,
        upgradeValue: upgrade.upgradeValue + 1,
      };
    }
    // Returns the upgrade unchanged if it's not the one being updated
    return upgrade;
  });
};
