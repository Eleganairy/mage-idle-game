import { UpgradeTypes, type Upgrade } from "./upgrades.types";

export const updatedPlayerStats = (
  upgradeType: UpgradeTypes,
  playerUpgrades: Upgrade[]
): Upgrade[] => {
  return playerUpgrades.map((upgrade) => {
    if (upgrade.name !== upgradeType) {
      return upgrade;
    }

    return {
      ...upgrade,
      currentUpgrades: upgrade.currentUpgrades + 1,
      cost: Math.floor((upgrade.cost *= 0.15)),
    };
  });
};
