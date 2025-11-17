import {
  ENEMY_LIST_WORLD_1,
  ENEMY_LIST_WORLD_2,
} from "../enemy/enemy.constants";
import type { World } from "./game-state.types";

export enum requiredNumberOfStages {
  WORLD_1 = 10,
  WORLD_2 = 20,
}

export const gameWorlds: Array<World> = [
  {
    worldNumber: 1,
    enemyPool: ENEMY_LIST_WORLD_1,
    requiredNumberOfStages: requiredNumberOfStages.WORLD_1,
  },
  {
    worldNumber: 2,
    enemyPool: ENEMY_LIST_WORLD_2,
    requiredNumberOfStages: requiredNumberOfStages.WORLD_2,
  },
];
