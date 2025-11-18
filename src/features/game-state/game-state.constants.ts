import {
  ENEMY_LIST_WORLD_1,
  ENEMY_LIST_WORLD_2,
  ENEMY_LIST_WORLD_3,
} from "../enemy/enemy.constants";
import type { World } from "./game-state.types";

export const BASE_REQUIRED_STAGES = 20;

export const gameWorlds: Array<World> = [
  {
    worldNumber: 1,
    enemyPool: ENEMY_LIST_WORLD_1,
    requiredNumberOfStages: BASE_REQUIRED_STAGES,
  },
  {
    worldNumber: 2,
    enemyPool: ENEMY_LIST_WORLD_2,
    requiredNumberOfStages: BASE_REQUIRED_STAGES,
  },
  {
    worldNumber: 3,
    enemyPool: ENEMY_LIST_WORLD_3,
    requiredNumberOfStages: BASE_REQUIRED_STAGES,
  },
];
