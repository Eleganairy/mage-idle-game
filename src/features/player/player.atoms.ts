import { atom } from "jotai";
import type { PlayerStats } from "./player.types";

export const playerCurrencyAtom = atom<number>(0);

export const playerStatsAtom = atom<PlayerStats>({
  baseHealth: 50,
  healthModifiers: [],
  baseAttackDamage: 1,
  attackDamageModifiers: [],
  baseAttackSpeed: 1000,
  attackSpeedModifiers: [],
  baseIdleDamage: 1,
  idleDamageModifiers: [],
  baseIdleAttackSpeed: 1000,
  idleAttackSpeedModifiers: [],
  money: 0,
});
