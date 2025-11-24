import { EnemyRarity, SlainThreshold } from "../enemy.types";

export const BASE_RARITY_WEIGHTS: Record<EnemyRarity, number> = {
  COMMON: 80,
  RARE: 20,
  LEGENDARY: 0,
};

export const RARITY_THRESHOLDS: Record<
  EnemyRarity,
  Record<SlainThreshold, number>
> = {
  COMMON: {
    [SlainThreshold.BRONZE]: 100,
    [SlainThreshold.SILVER]: 300,
    [SlainThreshold.GOLD]: 500,
  },
  RARE: {
    [SlainThreshold.BRONZE]: 50,
    [SlainThreshold.SILVER]: 100,
    [SlainThreshold.GOLD]: 200,
  },
  LEGENDARY: {
    [SlainThreshold.BRONZE]: 10,
    [SlainThreshold.SILVER]: 25,
    [SlainThreshold.GOLD]: 50,
  },
};
