import { atom } from "jotai";
import { DEFAULT_GAME_STATE, gameAreas } from "./game-state.constants";
import type { GameState } from "./game-state.types";
import { activeEnemyAtom } from "../enemy/enemy.atoms";
import { getRandomEnemy } from "../enemy/helpers/random-enemy-generator.helpers";

// Consolidate related atoms
export const gameStateAtom = atom<GameState>(DEFAULT_GAME_STATE);

// Derived atoms
export const activeAreaAtom = atom((get) => {
  const gameState = get(gameStateAtom);
  return (
    gameAreas.find((w) => w.AreaNumber === gameState.activeAreaNumber) ||
    gameAreas[0]
  );
});

// Write-only atom to handle Area transition
export const nextAreaAtom = atom(null, (get, set) => {
  const currentState = get(gameStateAtom);
  const nextAreaNumber = currentState.activeAreaNumber + 1;
  const nextArea = gameAreas.find((w) => w.AreaNumber === nextAreaNumber);

  if (nextArea) {
    // Update game state
    set(gameStateAtom, {
      ...currentState,
      activeAreaNumber: nextAreaNumber,
      activeStageNumber: 1,
    });

    set(unlockedAreasAtom, nextAreaNumber);

    // Set random enemy from new Area
    if (nextArea.enemyPool) {
      const newEnemy = getRandomEnemy(nextArea.enemyPool);
      set(activeEnemyAtom, newEnemy);
    }
  }
});

export const activeStageNumberAtom = atom(
  (get) => get(gameStateAtom).activeStageNumber,
  (get, set, newStage: number) => {
    const current = get(gameStateAtom);
    set(gameStateAtom, { ...current, activeStageNumber: newStage });
  }
);

export const highestStageAtom = atom(
  (get) => get(gameStateAtom).highestStageNumber,
  (get, set, newHighest: number) => {
    const current = get(gameStateAtom);
    set(gameStateAtom, {
      ...current,
      highestStageNumber: Math.max(current.highestStageNumber, newHighest),
    });
  }
);

export const highestAreaAtom = atom(
  (get) => get(gameStateAtom).highestAreaNumber,
  (get, set, newHighest: number) => {
    const current = get(gameStateAtom);
    set(gameStateAtom, {
      ...current,
      highestAreaNumber: Math.max(current.highestAreaNumber, newHighest),
    });
  }
);

export const unlockedAreasAtom = atom(
  (get) => get(gameStateAtom).unlockedAreas,
  (get, set, newArea: number) => {
    const current = get(gameStateAtom);
    set(gameStateAtom, {
      ...current,
      unlockedAreas: newArea,
    });
  }
);
