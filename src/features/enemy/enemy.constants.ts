import { EnemyRarity, SlainThreshold, type EnemyStats } from "./enemy.types";

export const ENEMY_LIST_AREA_1: Record<string, EnemyStats> = {
  SLIME: {
    name: "Slime",
    health: 10,
    currentHealth: 10,
    currencyDropReward: 1,
    attackDamage: 1,
    attackSpeed: 2000,
    icon: "../../../slime.png",
    rarity: EnemyRarity.common,
  },
  BLOB: {
    name: "Blob",
    health: 10,
    currentHealth: 10,
    currencyDropReward: 1,
    attackDamage: 1,
    attackSpeed: 2000,
    icon: "../../../slime.png",
    rarity: EnemyRarity.common,
  },
  GOBLIN: {
    name: "Goblin",
    health: 15,
    currentHealth: 15,
    currencyDropReward: 2,
    attackDamage: 1,
    attackSpeed: 1000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.common,
  },
  RAT: {
    name: "Rat",
    health: 15,
    currentHealth: 15,
    currencyDropReward: 2,
    attackDamage: 1,
    attackSpeed: 1000,
    icon: "../../../rat.png",
    rarity: EnemyRarity.rare,
  },
  MOUSE: {
    name: "Mouse",
    health: 15,
    currentHealth: 15,
    currencyDropReward: 2,
    attackDamage: 1,
    attackSpeed: 1000,
    icon: "../../../rat.png",
    rarity: EnemyRarity.rare,
  },
  PUPPY: {
    name: "Puppy",
    health: 15,
    currentHealth: 15,
    currencyDropReward: 2,
    attackDamage: 1,
    attackSpeed: 1000,
    icon: "../../../rat.png",
    rarity: EnemyRarity.legendary,
  },
};

export const ENEMY_LIST_AREA_2: Record<string, EnemyStats> = {
  TROLL: {
    name: "Troll",
    health: 30,
    currentHealth: 30,
    currencyDropReward: 4,
    attackDamage: 2,
    attackSpeed: 800,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.common,
  },
  SIMON: {
    name: "Simon",
    health: 50,
    currentHealth: 50,
    currencyDropReward: 4,
    attackDamage: 10,
    attackSpeed: 3000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.common,
  },
  ALIEN: {
    name: "Alien",
    health: 50,
    currentHealth: 50,
    currencyDropReward: 4,
    attackDamage: 10,
    attackSpeed: 3000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.rare,
  },
  LION: {
    name: "Lion",
    health: 50,
    currentHealth: 50,
    currencyDropReward: 4,
    attackDamage: 10,
    attackSpeed: 3000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.rare,
  },
  TIGER: {
    name: "Tiger",
    health: 50,
    currentHealth: 50,
    currencyDropReward: 4,
    attackDamage: 10,
    attackSpeed: 3000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.legendary,
  },
};

export const ENEMY_LIST_AREA_3: Record<string, EnemyStats> = {
  PENGUIN: {
    name: "Penguin",
    health: 60,
    currentHealth: 60,
    currencyDropReward: 10,
    attackDamage: 1,
    attackSpeed: 300,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.common,
  },
  BIRD: {
    name: "Snow Bird",
    health: 60,
    currentHealth: 60,
    currencyDropReward: 10,
    attackDamage: 1,
    attackSpeed: 300,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.common,
  },
  YETI: {
    name: "Snow Yeti",
    health: 200,
    currentHealth: 200,
    currencyDropReward: 20,
    attackDamage: 30,
    attackSpeed: 5000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.rare,
  },
  ORCA: {
    name: "Orca",
    health: 200,
    currentHealth: 200,
    currencyDropReward: 20,
    attackDamage: 30,
    attackSpeed: 5000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.rare,
  },
  LEOPARD: {
    name: "Snow Leopard",
    health: 200,
    currentHealth: 200,
    currencyDropReward: 20,
    attackDamage: 30,
    attackSpeed: 5000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.legendary,
  },
};

export const ENEMY_LIST_AREA_4: Record<string, EnemyStats> = {
  DRAGON: {
    name: "Dragon",
    health: 60,
    currentHealth: 60,
    currencyDropReward: 10,
    attackDamage: 1,
    attackSpeed: 300,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.common,
  },
  SNAKE: {
    name: "Snake",
    health: 60,
    currentHealth: 60,
    currencyDropReward: 10,
    attackDamage: 1,
    attackSpeed: 300,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.common,
  },
  MINOTAUR: {
    name: "Minotaur",
    health: 200,
    currentHealth: 200,
    currencyDropReward: 20,
    attackDamage: 30,
    attackSpeed: 5000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.rare,
  },
  UNICORN: {
    name: "Unicorn",
    health: 200,
    currentHealth: 200,
    currencyDropReward: 20,
    attackDamage: 30,
    attackSpeed: 5000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.rare,
  },
  KING_SIMON: {
    name: "King Simon",
    health: 200,
    currentHealth: 200,
    currencyDropReward: 20,
    attackDamage: 30,
    attackSpeed: 5000,
    icon: "../../../goblin.png",
    rarity: EnemyRarity.legendary,
  },
};

export const RARITY_WEIGHTS: Record<EnemyRarity, number> = {
  [EnemyRarity.common]: 70, // 70% chance for common enemies
  [EnemyRarity.rare]: 20, // 8% chance for rare enemies
  [EnemyRarity.legendary]: 10, // 2% chance for legendary enemies
};

export const RARITY_THRESHOLDS: Record<
  EnemyRarity,
  Record<SlainThreshold, number>
> = {
  [EnemyRarity.common]: {
    [SlainThreshold.bronze]: 30,
    [SlainThreshold.silver]: 50,
    [SlainThreshold.gold]: 70,
  },
  [EnemyRarity.rare]: {
    [SlainThreshold.bronze]: 10,
    [SlainThreshold.silver]: 20,
    [SlainThreshold.gold]: 30,
  },
  [EnemyRarity.legendary]: {
    [SlainThreshold.bronze]: 3,
    [SlainThreshold.silver]: 5,
    [SlainThreshold.gold]: 10,
  },
};

export const ALL_ENEMIES: Record<string, EnemyStats> = {
  ...ENEMY_LIST_AREA_1,
  ...ENEMY_LIST_AREA_2,
  ...ENEMY_LIST_AREA_3,
  ...ENEMY_LIST_AREA_4,
};
