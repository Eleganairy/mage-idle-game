import { atom } from "jotai";
import { Pages, type World } from "./game-state.types";
import { ENEMY_LIST_WORLD_1 } from "../enemy/enemy.constants";
import type { EnemyStats } from "../enemy/enemy.types";

export const activePageAtom = atom<Pages>(Pages.battlefield);

export const activeStageNumberAtom = atom<number>(1);

export const activeWorldAtom = atom<World>({
  worldNumber: 1,
  enemyPool: ENEMY_LIST_WORLD_1,
  requiredNumberOfStages: 10,
});

export const activeWorldEnemyPoolAtom = atom<Record<string, EnemyStats>>(
  (get) => get(activeWorldAtom).enemyPool
);

//First value is the world and the second value is the stage of that world
export const highestScoreAtom = atom<Array<number>>([0, 0]);
