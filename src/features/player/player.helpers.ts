import type { UpgradeTypes, Upgrade } from "../upgrades/upgrades.types";
import { ModifierTypes } from "./player.types";

export const calculateTotalValue = (
  baseValue: number,
  upgradeType: UpgradeTypes,
  modifiers: Upgrade[]
) => {
  let totalValue = baseValue;

  // Apply additive modifiers first
  modifiers.forEach((modifier) => {
    if (modifier.type !== upgradeType) return;
    if (modifier.modifierType === ModifierTypes.ADDITIVE) {
      totalValue += modifier.upgradeValue * modifier.currentUpgrades;
    }
  });

  // Apply multiplicative and percentile modifiers
  modifiers.forEach((modifier) => {
    if (modifier.type !== upgradeType) return;

    if (modifier.modifierType === ModifierTypes.MULTIPLICATIVE) {
      // Apply multiplier linearly: base * (1 + (multiplier - 1) * levels)
      totalValue *= 1 + modifier.upgradeValue * modifier.currentUpgrades;
    } else if (modifier.modifierType === ModifierTypes.PERCENTILE) {
      // Apply percentage bonus
      totalValue *=
        1 + (modifier.upgradeValue * modifier.currentUpgrades) / 100;
    }
  });

  return totalValue;
};
