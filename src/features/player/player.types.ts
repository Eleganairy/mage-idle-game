export type PlayerStats = {
  totalHealth: number;
  healthModifiers: Array<Modifier>;
  totalAttackDamage: number;
  attackDamageModifiers: Array<Modifier>;
  totalAttackSpeed: number;
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
