import type { EnemyStats } from "../enemy/enemy.types";

export interface GameState {
  activePage: Pages;
  activeStageNumber: number;
  activeWorldNumber: number;
  highestStageNumber: number;
  highestWorldNumber: number;
}

export type Stage = {
  stageNumber: number;
  healthMulitplier: number;
  attackDamageMultiplier: number;
  attackSpeedMultiplier: number;
};

export type World = {
  worldNumber: number;
  enemyPool: Record<string, EnemyStats>;
  requiredNumberOfStages: number;
};

export enum Pages {
  battlefield = "BATTLEFIELD",
  upgrades = "UPGRADES",
  settings = "SETTINGS",
}
