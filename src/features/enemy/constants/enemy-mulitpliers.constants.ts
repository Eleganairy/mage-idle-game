import { EnemyRarity, EnemyType } from "../enemy.types";

// Base values
const BASE_HEALTH = 10;
const BASE_ATTACK_DAMAGE = 2;
const BASE_ATTACK_SPEED = 2000;
const BASE_CURRENCY_REWARD = 1;

export const BASE_ENEMY_STATS = {
  health: BASE_HEALTH,
  attackDamage: BASE_ATTACK_DAMAGE,
  attackSpeed: BASE_ATTACK_SPEED,
  currencyReward: BASE_CURRENCY_REWARD,
};

// Area scaling multipliers (exponential growth per area)
export const AREA_MULTIPLIERS = {
  health: 3,
  attackDamage: 2,
  attackSpeed: 1.5,
  currencyReward: 3,
};

// Rarity multipliers
export const RARITY_MULTIPLIERS: Record<
  EnemyRarity,
  {
    health: number;
    attackDamage: number;
    attackSpeed: number;
    currencyReward: number;
  }
> = {
  [EnemyRarity.COMMON]: {
    health: 1,
    attackDamage: 1,
    attackSpeed: 1,
    currencyReward: 1,
  },
  [EnemyRarity.RARE]: {
    health: 2,
    attackDamage: 2,
    attackSpeed: 1.5,
    currencyReward: 2.5,
  },
  [EnemyRarity.LEGENDARY]: {
    health: 4,
    attackDamage: 3.5,
    attackSpeed: 2,
    currencyReward: 5,
  },
};

// Type-specific bonuses
export const TYPE_BONUSES: Record<
  EnemyType,
  {
    health: number;
    attackDamage: number;
    attackSpeed: number;
  }
> = {
  [EnemyType.STANDARD]: {
    health: 1,
    attackDamage: 1,
    attackSpeed: 1,
  },
  [EnemyType.FAST]: {
    health: 0.7, // Less health
    attackDamage: 1.2, // Slightly more damage
    attackSpeed: 0.6, // Much faster (lower = faster)
  },
  [EnemyType.STRONG]: {
    health: 1,
    attackDamage: 1.8, // Much more damage
    attackSpeed: 1.3, // Slightly slower
  },
  [EnemyType.TANK]: {
    health: 2, // Double health
    attackDamage: 0.8, // Less damage
    attackSpeed: 1.5, // Slower
  },
};
