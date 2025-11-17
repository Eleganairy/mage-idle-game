import { atom } from "jotai";
import { gameWorlds } from "./game-state.constants";
import { Pages, type GameState } from "./game-state.types";

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
