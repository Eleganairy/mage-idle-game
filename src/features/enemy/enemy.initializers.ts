import { gameAreas } from "../game-state/game-state.constants";
import type { SlainEnemiesPerArea, SlainEnemyData } from "./enemy.types";

export const initializeSlainEnemies = () => {
  return gameAreas.reduce((areaSlainEnemies, area) => {
    areaSlainEnemies[area.AreaNumber] = Object.keys(area.enemyPool).reduce(
      (enemySlainData, enemyKey) => {
        enemySlainData[enemyKey] = {
          count: 0,
          thresholdCrossed: undefined,
        };
        return enemySlainData;
      },
      {} as Record<string, SlainEnemyData>
    );
    return areaSlainEnemies;
  }, {} as SlainEnemiesPerArea);
};
