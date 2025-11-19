import { type Upgrade, UpgradeTypes } from "./upgrades.types";

export const updatedPlayerStats = (
  upgradeType: UpgradeTypes,
  playerUpgrades: Upgrade[]
): Upgrade[] => {
  return playerUpgrades.map((upgrade) => {
    if (upgrade.name !== upgradeType) {
      return upgrade;
    }

    // Calculate new cost with multiplier
    const newCost = Math.floor(upgrade.cost * upgrade.costMultiplier);

    return {
      ...upgrade,
      currentUpgrades: upgrade.currentUpgrades + 1,
      cost: newCost, // Update cost for next purchase
    };
  });
};
