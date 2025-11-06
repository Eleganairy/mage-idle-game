import { atom } from "jotai";
import { ModifierTypes, type PlayerStats } from "./player.types";
import {
  PLAYER_BASE_ATTACK_DAMAGE,
  PLAYER_BASE_ATTACK_SPEED,
  PLAYER_BASE_HEALTH,
} from "./player.constants";

export const playerCurrencyAtom = atom<number>(0);

export const playerStatsAtom = atom<PlayerStats>({
  totalHealth: PLAYER_BASE_HEALTH,
  healthModifiers: [
    {
      name: "Attack Speed 1",
      type: ModifierTypes.MULTIPLICATIVE,
      tier: 0,
      value: 0.2,
    },
  ],
  totalAttackDamage: PLAYER_BASE_ATTACK_DAMAGE,
  attackDamageModifiers: [
    {
      name: "Attack Damage 1",
      type: ModifierTypes.ADDITIVE,
      tier: 0,
      value: 1,
    },
  ],
  totalAttackSpeed: PLAYER_BASE_ATTACK_SPEED,
  attackSpeedModifiers: [
    {
      name: "Attack Speed 1",
      type: ModifierTypes.PERCENTILE,
      tier: 0,
      value: 10,
    },
  ],
  money: 0,
});
