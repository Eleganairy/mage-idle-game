import { ALL_ENEMIES, RARITY_WEIGHTS } from "./enemy.constants";
import type { EnemyRarity, EnemyStats } from "./enemy.types";

// Get the key from ALL_ENEMIES that matches the enemy name
export const getEnemyKeyByName = (enemyName: string): string | undefined => {
  return Object.keys(ALL_ENEMIES).find(
    (key) => ALL_ENEMIES[key].name === enemyName
  );
};

export const getRandomEnemy = (
  enemyPool: Record<string, EnemyStats>
): EnemyStats => {
  const enemyKeys = Object.keys(enemyPool);
  const randomIndex = Math.floor(Math.random() * enemyKeys.length);
  const enemyKey = enemyKeys[randomIndex];
  const enemy = enemyPool[enemyKey];

  return {
    ...enemy,
    currentHealth: enemy.health, // Reset health
  };
};

export const getFirstEnemy = (
  enemyPool: Record<string, EnemyStats>
): EnemyStats => {
  const firstKey = Object.keys(enemyPool)[0];
  const enemy = enemyPool[firstKey];

  return {
    ...enemy,
    currentHealth: enemy.health,
  };
};

// Precompute weighted array for an enemy pool
export const precomputeWeightedEnemyPool = (
  enemyPool: Record<string, EnemyStats>,
  rarityWeights: Record<EnemyRarity, number> = RARITY_WEIGHTS
): EnemyStats[] => {
  const weightedEnemies: EnemyStats[] = [];

  Object.values(enemyPool).forEach((enemy) => {
    const weight = rarityWeights[enemy.rarity];
    for (let i = 0; i < weight; i++) {
      weightedEnemies.push(enemy);
    }
  });

  return weightedEnemies;
};

// Select a random enemy from a precomputed weighted array
export const getWeightedRandomEnemy = (
  weightedEnemies: EnemyStats[]
): EnemyStats => {
  const randomIndex = Math.floor(Math.random() * weightedEnemies.length);
  return weightedEnemies[randomIndex];
};
