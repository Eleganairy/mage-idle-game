import { atom } from "jotai";
import type { Enemy, SlainEnemiesPerArea } from "./enemy.types";
import { initializeSlainEnemies } from "./enemy.initializers";
import { ENEMY_LIST_AREA_1 } from "./constants/enemy-list.constants";
import { BASE_RARITY_WEIGHTS } from "./constants/enemy-rarity.constants";

export const activeEnemyAtom = atom<Enemy>(ENEMY_LIST_AREA_1.FIELD_MOUSE);

export const currentRarityWeightsAtom =
  atom<Record<string, number>>(BASE_RARITY_WEIGHTS);

export const enemyCurrentHealthAtom = atom<number>(0);

export const slainEnemiesCountAtom = atom<SlainEnemiesPerArea>(
  initializeSlainEnemies()
);
