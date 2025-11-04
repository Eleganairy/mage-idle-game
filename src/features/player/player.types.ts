export type PlayerStats = {
  baseHealth: number;
  healthModifiers: Array<Modifier>;
  baseAttackDamage: number;
  attackDamageModifiers: Array<Modifier>;
  baseAttackSpeed: number;
  attackSpeedModifiers: Array<Modifier>;
  money: number;
};

export type Modifier = {
  name: string;
  value: number;
  tier: number;
  type: ModifierTypes;
};

export enum ModifierTypes {
  ADDITIVE = "ADDITIVE",
  MULTIPLICATIVE = "MULTIPLICATIVE",
  PERCENTILE = "PERCENTILE",
}
