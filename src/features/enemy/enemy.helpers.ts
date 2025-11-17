import type { EnemyStats } from "./enemy.types";

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
