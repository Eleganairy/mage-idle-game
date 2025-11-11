import type { UpgradeType } from "../upgrades/upgrades.types";
import { ModifierTypes } from "./player.types";

export const calculateTotalValue = (
  baseValue: number,
  modifiers: UpgradeType[]
) => {
  let totalValue = baseValue;

  console.log("Calculating total value...");
  modifiers.forEach((modifier) => {
    if (modifier.type === ModifierTypes.ADDITIVE) {
      totalValue += modifier.upgradeValue * modifier.currentUpgrades;
    }
  });

  modifiers.forEach((modifier) => {
    if (modifier.type === ModifierTypes.MULTIPLICATIVE) {
      totalValue *=
        modifier.currentUpgrades > 0
          ? modifier.upgradeValue * modifier.currentUpgrades
          : 1;
    } else if (modifier.type === ModifierTypes.PERCENTILE) {
      totalValue +=
        (totalValue * (modifier.upgradeValue * modifier.currentUpgrades)) / 100;
    }
  });

  return totalValue;
};
