import {
  AREA_MULTIPLIERS,
  BASE_ENEMY_STATS,
  RARITY_MULTIPLIERS,
  TYPE_BONUSES,
} from "../constants/enemy-mulitpliers.constants";
import { EnemyRarity, EnemyType, type Enemy } from "../enemy.types";

/**
 * Calculate enemy stats based on area, rarity, and type
 */
export const calculateEnemyStats = (
  areaNumber: number,
  rarity: EnemyRarity,
  type: EnemyType
): {
  health: number;
  attackDamage: number;
  attackSpeed: number;
  currencyDropReward: number;
} => {
  // Calculate base values with area scaling (exponential growth)
  const areaHealth =
    BASE_ENEMY_STATS.health * Math.pow(AREA_MULTIPLIERS.health, areaNumber - 1);
  const areaDamage =
    BASE_ENEMY_STATS.attackDamage *
    Math.pow(AREA_MULTIPLIERS.attackDamage, areaNumber - 1);
  const areaSpeed =
    BASE_ENEMY_STATS.attackSpeed *
    Math.pow(AREA_MULTIPLIERS.attackSpeed, areaNumber - 1);
  const areaReward =
    BASE_ENEMY_STATS.currencyReward *
    Math.pow(AREA_MULTIPLIERS.currencyReward, areaNumber - 1);

  // Apply rarity multipliers
  const rarityMult = RARITY_MULTIPLIERS[rarity];
  const rarityHealth = areaHealth * rarityMult.health;
  const rarityDamage = areaDamage * rarityMult.attackDamage;
  const raritySpeed = areaSpeed * rarityMult.attackSpeed;
  const rarityReward = areaReward * rarityMult.currencyReward;

  // Apply type bonuses
  const typeMult = TYPE_BONUSES[type];
  const finalHealth = Math.floor(rarityHealth * typeMult.health);
  const finalDamage = Math.floor(rarityDamage * typeMult.attackDamage);
  const finalSpeed = Math.floor(raritySpeed * typeMult.attackSpeed);
  const finalReward = Math.floor(rarityReward);

  return {
    health: finalHealth,
    attackDamage: finalDamage,
    attackSpeed: finalSpeed,
    currencyDropReward: finalReward,
  };
};

/**
 * Create an enemy with calculated stats
 */
export const createEnemy = (
  name: string,
  areaNumber: number,
  rarity: EnemyRarity,
  type: EnemyType,
  icon: string,
  sprite: string
): Enemy => {
  const stats = calculateEnemyStats(areaNumber, rarity, type);

  return {
    name,
    health: stats.health,
    currentHealth: stats.health,
    currencyDropReward: stats.currencyDropReward,
    attackDamage: stats.attackDamage,
    attackSpeed: stats.attackSpeed,
    icon,
    sprite,
    rarity,
    type,
  };
};
