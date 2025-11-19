import { atom } from "jotai";
import type { EnemyStats, SlainEnemiesPerArea } from "./enemy.types";
import { ENEMY_LIST_AREA_1 } from "./enemy.constants";
import { initializeSlainEnemies } from "./enemy.initializers";

export const activeEnemyAtom = atom<EnemyStats>(ENEMY_LIST_AREA_1.SLIME);

export const slainEnemiesCountAtom = atom<SlainEnemiesPerArea>(
  initializeSlainEnemies()
);
