import { atom } from "jotai";
import { Pages } from "./game-state.types";

export const activePageAtom = atom<Pages>(Pages.battlefield);
