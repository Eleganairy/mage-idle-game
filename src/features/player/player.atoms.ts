import { atom } from "jotai";
import type { PlayerStats } from "./player.types";
import {
  PLAYER_BASE_ATTACK_DAMAGE,
  PLAYER_BASE_ATTACK_SPEED,
  PLAYER_BASE_HEALTH,
} from "./player.constants";

export const playerCurrencyAtom = atom<number>(0);

export const playerStatsAtom = atom<PlayerStats>({
  totalHealth: PLAYER_BASE_HEALTH,
  totalAttackDamage: PLAYER_BASE_ATTACK_DAMAGE,
  totalAttackSpeed: PLAYER_BASE_ATTACK_SPEED,
  energy: 0,
});
