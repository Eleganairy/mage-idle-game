import type { Generation } from "./player.types";

export const PLAYER_BASE_ATTACK_DAMAGE = 1;
export const PLAYER_BASE_ATTACK_SPEED = 1000;
export const PLAYER_BASE_HEALTH = 100;
export const PLAYER_BASE_ENERGY = 100;

export const GENERATIONS: Generation[] = [
  {
    generationNumber: 1,
    requiredEnergyForNextGeneration: 1000,
  },
  {
    generationNumber: 2,
    requiredEnergyForNextGeneration: 1000,
  },
  {
    generationNumber: 3,
    requiredEnergyForNextGeneration: 1000,
  },
];
