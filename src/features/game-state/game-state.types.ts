import type { EnemyStats } from "../enemy/enemy.types";

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

export interface GameState {
  activePage: Pages;
  activeStage: number;
  highestStage: number;
  activeWorld: number;
  highestWorld: number;
}
