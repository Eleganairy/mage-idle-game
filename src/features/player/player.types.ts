export type PlayerStats = {
  totalHealth: number;
  totalAttackDamage: number;
  totalAttackSpeed: number;
};

export type Generation = {
  generationNumber: number;
  requiredEnergyForNextGeneration: number;
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
