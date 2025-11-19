import type { EnemyStats } from "../enemy/enemy.types";

export interface GameState {
  activePage: Pages;
  activeStageNumber: number;
  activeAreaNumber: number;
  highestStageNumber: number;
  highestAreaNumber: number;
  unlockedAreas: number;
}

export type Stage = {
  stageNumber: number;
  healthMulitplier: number;
  attackDamageMultiplier: number;
  attackSpeedMultiplier: number;
};

export type Area = {
  AreaNumber: number;
  enemyPool: Record<string, EnemyStats>;
  requiredNumberOfStages: number;
};

export enum Pages {
  battlefield = "BATTLEFIELD",
  AreaSelection = "Area_SELECTION",
  upgrades = "UPGRADES",
  pokedex = "POKEDEX",
  traits = "TRAITS",
  settings = "SETTINGS",
}
