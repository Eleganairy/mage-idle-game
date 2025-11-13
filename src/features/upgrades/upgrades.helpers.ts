import { type Upgrade } from "./upgrades.types";

export const updatedPlayerStats = (name: string, playerUpgrades: Upgrade[]) => {
  return playerUpgrades.map((upgrade) => {
    // Gets the correct upgrade from the upgrades array
    if (upgrade.name !== name) return upgrade;
    // Applies the upgrade
    return {
      ...upgrade,
      currentUpgrades: upgrade.currentUpgrades + 1,
      cost: Math.floor(upgrade.cost * 1.5),
    };
  });
};
