//INTERFACES
export interface Enemy {
  name: string;
  health: number;
  currentHealth: number;
  currencyDropReward: number;
  attackDamage: number;
  attackSpeed: number; // in milliseconds
  icon?: string;
  sprite: string;
  rarity: EnemyRarity;
  type: EnemyType;
}

//CONSTS
export const EnemyRarity = {
  COMMON: "COMMON",
  RARE: "RARE",
  LEGENDARY: "LEGENDARY",
} as const;

export type EnemyRarity = (typeof EnemyRarity)[keyof typeof EnemyRarity];

export const EnemyType = {
  STANDARD: "STANDARD",
  FAST: "FAST",
  STRONG: "STRONG",
  TANK: "TANK",
} as const;

export type EnemyType = (typeof EnemyType)[keyof typeof EnemyType];

export const SlainThreshold = {
  BRONZE: "BRONZE",
  SILVER: "SILVER",
  GOLD: "GOLD",
} as const;

//TYPE ALIASES
export type SlainThreshold =
  (typeof SlainThreshold)[keyof typeof SlainThreshold];

export type SlainEnemyData = {
  count: number;
  thresholdCrossed: SlainThreshold | undefined;
};

export type SlainEnemiesPerArea = Record<
  string,
  Record<string, SlainEnemyData>
>;
