import { atom } from "jotai";

export const brainCellPointsAtom = atom<number>(10);
export const spentBrainCellPointsAtom = atom<number>(0);
export const upgradedButtonsAtom = atom<Set<number>>(new Set([0]));
