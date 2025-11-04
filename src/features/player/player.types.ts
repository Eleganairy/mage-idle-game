export type PlayerStats = {
  baseHealth: number;
  healthModifiers: Array<Modifier>;
  baseAttackDamage: number;
  attackDamageModifiers: Array<Modifier>;
  baseAttackSpeed: number;
  attackSpeedModifiers: Array<Modifier>;
  baseIdleDamage: number;
  idleDamageModifiers: Array<Modifier>;
  baseIdleAttackSpeed: number;
  idleAttackSpeedModifiers: Array<Modifier>;
  money: number;
};

export type Modifier = {
  value: number;
  tier: number;
  type: ModifierTypes;
};

export enum ModifierTypes {
  ADDITIVE = "ADDITIVE",
  MULTIPLICATIVE = "MULTIPLICATIVE",
  PERCENTILE = "PERCENTILE",
}
