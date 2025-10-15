import { atom } from "jotai";
import type { EnemyStats } from "./enemy.types";

export const enemyStatsAtom = atom<EnemyStats>({
  health: 10,
  currencyDropReward: 1,
});
