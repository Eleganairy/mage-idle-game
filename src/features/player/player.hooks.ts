import { ModifierTypes, type Modifier } from "./player.types";

export const useUpgradedStat = (
  baseValue: number,
  modifiers: Array<Modifier>
) => {
  let totalValue = baseValue;

  modifiers.forEach((modifier) => {
    if (modifier.type === ModifierTypes.ADDITIVE) {
      totalValue += modifier.value * modifier.tier;
    }
  });

  modifiers.forEach((modifier) => {
    if (modifier.type === ModifierTypes.MULTIPLICATIVE) {
      totalValue *= modifier.value * modifier.tier;
    } else if (modifier.type === ModifierTypes.PERCENTILE) {
      totalValue += (totalValue * (modifier.value * modifier.tier)) / 100;
    }
  });

  return totalValue;
};
