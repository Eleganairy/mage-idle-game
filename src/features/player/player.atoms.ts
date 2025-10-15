import { atom } from "jotai";
import type { PlayerStats } from "./player.types";

export const playerCurrencyAtom = atom<number>(0);

export const playerStatsAtom = atom<PlayerStats>({
  health: 100,
  attackDamage: 1,
  attackSpeed: 1000,
});
