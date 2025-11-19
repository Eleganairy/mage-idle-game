import {
  ENEMY_LIST_AREA_1,
  ENEMY_LIST_AREA_2,
  ENEMY_LIST_AREA_3,
  ENEMY_LIST_AREA_4,
} from "../enemy/enemy.constants";
import { getRequiredStagesForArea } from "./game-state.helpers";
import { Pages, type Area } from "./game-state.types";

export const BASE_REQUIRED_STAGES = 20;

export const DEFAULT_GAME_STATE = {
  activePage: Pages.battlefield,
  activeStageNumber: 1,
  activeAreaNumber: 1,
  highestStageNumber: 1,
  highestAreaNumber: 1,
  unlockedAreas: 1,
};

export const gameAreas: Array<Area> = [
  {
    AreaNumber: 1,
    enemyPool: ENEMY_LIST_AREA_1,
    requiredNumberOfStages: getRequiredStagesForArea(1),
  },
  {
    AreaNumber: 2,
    enemyPool: ENEMY_LIST_AREA_2,
    requiredNumberOfStages: getRequiredStagesForArea(2),
  },
  {
    AreaNumber: 3,
    enemyPool: ENEMY_LIST_AREA_3,
    requiredNumberOfStages: getRequiredStagesForArea(3),
  },
  {
    AreaNumber: 4,
    enemyPool: ENEMY_LIST_AREA_4,
    requiredNumberOfStages: getRequiredStagesForArea(4),
  },
];
