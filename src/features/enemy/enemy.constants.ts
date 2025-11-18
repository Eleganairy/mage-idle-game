import type { EnemyStats } from "./enemy.types";

export const ENEMY_LIST_WORLD_1: Record<string, EnemyStats> = {
  SLIME: {
    name: "Slime",
    health: 10,
    currentHealth: 10,
    currencyDropReward: 1,
    attackDamage: 1,
    attackSpeed: 2000,
    icon: "../../../slime.png",
  },
  GOBLIN: {
    name: "Goblin",
    health: 15,
    currentHealth: 15,
    currencyDropReward: 2,
    attackDamage: 1,
    attackSpeed: 1000,
    icon: "../../../goblin.png",
  },
  RAT: {
    name: "Rat",
    health: 15,
    currentHealth: 15,
    currencyDropReward: 2,
    attackDamage: 1,
    attackSpeed: 1000,
    icon: "../../../rat.png",
  },
};

export const ENEMY_LIST_WORLD_2: Record<string, EnemyStats> = {
  TROLL: {
    name: "Troll",
    health: 30,
    currentHealth: 30,
    currencyDropReward: 4,
    attackDamage: 2,
    attackSpeed: 800,
    icon: "../../../goblin.png",
  },
  SIMON: {
    name: "Simon",
    health: 50,
    currentHealth: 50,
    currencyDropReward: 4,
    attackDamage: 10,
    attackSpeed: 3000,
    icon: "../../../goblin.png",
  },
  ALIEN: {
    name: "Alien",
    health: 50,
    currentHealth: 50,
    currencyDropReward: 4,
    attackDamage: 10,
    attackSpeed: 3000,
    icon: "../../../goblin.png",
  },
};

export const ENEMY_LIST_WORLD_3: Record<string, EnemyStats> = {
  PENGUIN: {
    name: "Penguin",
    health: 60,
    currentHealth: 60,
    currencyDropReward: 10,
    attackDamage: 1,
    attackSpeed: 300,
    icon: "../../../goblin.png",
  },
  BIRD: {
    name: "Snow Bird",
    health: 60,
    currentHealth: 60,
    currencyDropReward: 10,
    attackDamage: 1,
    attackSpeed: 300,
    icon: "../../../goblin.png",
  },
  YETI: {
    name: "Snow Yeti",
    health: 200,
    currentHealth: 200,
    currencyDropReward: 20,
    attackDamage: 30,
    attackSpeed: 5000,
    icon: "../../../goblin.png",
  },
};

export const ALL_ENEMIES: Record<string, EnemyStats> = {
  ...ENEMY_LIST_WORLD_1,
  ...ENEMY_LIST_WORLD_2,
  ...ENEMY_LIST_WORLD_3,
};
