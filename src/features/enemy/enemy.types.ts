export interface EnemyStats {
  name: string;
  health: number;
  currentHealth: number;
  currencyDropReward: number;
  attackDamage: number;
  attackSpeed: number; // in milliseconds
  icon?: string;
  rarity: EnemyRarity;
}

export enum EnemyRarity {
  common = "COMMON",
  rare = "RARE",
  legendary = "LEGENDARY",
}

// Track slain enemies per area and whether they have crossed their threshold
export enum SlainThreshold {
  bronze = "BRONZE",
  silver = "SILVER",
  gold = "GOLD",
}

export type SlainEnemyData = {
  count: number;
  thresholdCrossed?: SlainThreshold;
};

export type SlainEnemiesPerArea = Record<
  string,
  Record<string, SlainEnemyData>
>;
