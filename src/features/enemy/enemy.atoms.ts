import { atom } from "jotai";
import type { EnemyStats } from "./enemy.types";
import { ENEMY_LIST_WORLD_1 } from "./enemy.constants";

export const activeEnemyAtom = atom<EnemyStats>(ENEMY_LIST_WORLD_1.SLIME);
