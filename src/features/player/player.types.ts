export type PlayerStats = {
  totalHealth: number;
  totalAttackDamage: number;
  totalAttackSpeed: number;
  energy: number;
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
