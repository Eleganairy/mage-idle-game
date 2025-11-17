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
};

export const ENEMY_LIST_WORLD_2: Record<string, EnemyStats> = {
  TROLL: {
    name: "Troll",
    health: 30,
    currentHealth: 30,
    currencyDropReward: 4,
    attackDamage: 5,
    attackSpeed: 3000,
    icon: "../../../goblin.png",
  },
  SIMON: {
    name: "Simon",
    health: 50,
    currentHealth: 50,
    currencyDropReward: 4,
    attackDamage: 20,
    attackSpeed: 5000,
    icon: "../../../goblin.png",
  },
};
