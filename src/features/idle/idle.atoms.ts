import { atom } from "jotai";
import type { IdleStats } from "./idle.types";

export const idleStatsAtom = atom<IdleStats>({
  attackDamage: 0.5,
  attackSpeed: 1000,
});
