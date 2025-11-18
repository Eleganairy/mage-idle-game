import { atom } from "jotai";
import type { EnemyStats } from "./enemy.types";
import { ALL_ENEMIES, ENEMY_LIST_WORLD_1 } from "./enemy.constants";

export const activeEnemyAtom = atom<EnemyStats>(ENEMY_LIST_WORLD_1.SLIME);

export const slainEnemiesCountAtom = atom<Record<string, number>>(
  Object.keys(ALL_ENEMIES).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {} as Record<string, number>)
);
