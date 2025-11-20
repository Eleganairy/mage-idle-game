import { BRAIN_UPGRADES } from "./brain.constants";

export const canUpgrade = (
  upgradedButtons: Set<number>,
  buttonId: number
): boolean => {
  const button = BRAIN_UPGRADES.find((b) => b.id === buttonId);
  if (!button) return false;

  // Center button is always available
  if (buttonId === 1) return true;

  // Check if any parent is upgraded
  const parents = BRAIN_UPGRADES.filter((b) =>
    b.connectedTo.includes(buttonId)
  );

  return parents.some((parent) => upgradedButtons.has(parent.id));
};
