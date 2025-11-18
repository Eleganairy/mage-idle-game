import { atom } from "jotai";
import { type Upgrade } from "./upgrades.types";
import { BASE_PLAYER_UPGRADES } from "./upgrades.constants";

export const playerUpgradesAtom = atom<Array<Upgrade>>(BASE_PLAYER_UPGRADES);
