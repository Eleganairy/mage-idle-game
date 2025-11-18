import { atom } from "jotai";
import { gameWorlds } from "./game-state.constants";
import { Pages, type GameState } from "./game-state.types";
import { getRandomEnemy } from "../enemy/enemy.helpers";
import { activeEnemyAtom } from "../enemy/enemy.atoms";

// Consolidate related atoms
export const gameStateAtom = atom<GameState>({
  activePage: Pages.battlefield,
  activeStageNumber: 1,
  activeWorldNumber: 1,
  highestStageNumber: 1,
  highestWorldNumber: 1,
});

// Derived atoms
export const activeWorldAtom = atom((get) => {
  const gameState = get(gameStateAtom);
  return (
    gameWorlds.find((w) => w.worldNumber === gameState.activeWorldNumber) ||
    gameWorlds[0]
  );
});

// Write-only atom to handle world transition
export const nextWorldAtom = atom(null, (get, set) => {
  const currentState = get(gameStateAtom);
  const nextWorldNumber = currentState.activeWorldNumber + 1;
  const nextWorld = gameWorlds.find((w) => w.worldNumber === nextWorldNumber);

  if (nextWorld) {
    // Update game state
    set(gameStateAtom, {
      ...currentState,
      activeWorldNumber: nextWorldNumber,
      activeStageNumber: 1,
    });

    // Set random enemy from new world
    if (nextWorld.enemyPool) {
      const newEnemy = getRandomEnemy(nextWorld.enemyPool);
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

export const highestWorldAtom = atom(
  (get) => get(gameStateAtom).highestWorldNumber,
  (get, set, newHighest: number) => {
    const current = get(gameStateAtom);
    set(gameStateAtom, {
      ...current,
      highestWorldNumber: Math.max(current.highestWorldNumber, newHighest),
    });
  }
);
