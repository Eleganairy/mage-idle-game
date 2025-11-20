import { Box, Stack } from "@mui/material";
import { ActionBarItem } from ".";
import { Paragraph } from "../paragraph";
import { LABEL_TEXT_COLOR } from "../../constants/colors";
import { useAtomValue, useSetAtom } from "jotai";
import { Pages } from "../../features/game-state/game-state.types";
import {
  activeStageNumberAtom,
  activeAreaAtom,
  gameStateAtom,
} from "../../features/game-state/game-state.atoms";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { gameAreas } from "../../features/game-state/game-state.constants";
import { BASE_PLAYER_UPGRADES } from "../../features/upgrades/upgrades.constants";

export const ActionBar = () => {
  const setGameState = useSetAtom(gameStateAtom);
  const activeStageNumber = useAtomValue(activeStageNumberAtom);
  const activeArea = useAtomValue(activeAreaAtom);

  return (
    <Stack spacing={2}>
      <Box sx={{ padding: 2 }}>
        <ActionBarItem
          text="Battlefield"
          rightText={`Stage ${activeArea.AreaNumber} - ${activeStageNumber}`}
          onClick={() =>
            setGameState((prev) => ({
              ...prev,
              activePage: Pages.battlefield,
            }))
          }
        />
        <ActionBarItem
          text="Area Selection"
          rightText={`${activeArea.AreaNumber} / ${gameAreas.length}`}
          onClick={() =>
            setGameState((prev) => ({
              ...prev,
              activePage: Pages.AreaSelection,
            }))
          }
        />
      </Box>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Paragraph
          text="This generation"
          color={LABEL_TEXT_COLOR}
          size={TYPOGRAPHY_SIZES.label}
        />
        <ActionBarItem
          text="Upgrades"
          rightText={`total: ${BASE_PLAYER_UPGRADES.length}`}
          icon={
            <img
              src={"../../../sword.png"}
              alt={"Sword Icon"}
              height={"28vh"}
              width={"28vh"}
            />
          }
          onClick={() =>
            setGameState((prev) => ({
              ...prev,
              activePage: Pages.upgrades,
            }))
          }
        />
      </Stack>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Paragraph
          text="Across generations"
          color={LABEL_TEXT_COLOR}
          size={TYPOGRAPHY_SIZES.label}
        />
        <ActionBarItem
          text="Pokedex"
          icon={
            <img
              src={"../../../sword.png"}
              alt={"Sword Icon"}
              height={"28vh"}
              width={"28vh"}
            />
          }
          onClick={() =>
            setGameState((prev) => ({
              ...prev,
              activePage: Pages.pokedex,
            }))
          }
        />
        <ActionBarItem
          text="Brain"
          icon={
            <img
              src={"../../../sword.png"}
              alt={"Sword Icon"}
              height={"28vh"}
              width={"28vh"}
            />
          }
          onClick={() =>
            setGameState((prev) => ({
              ...prev,
              activePage: Pages.brain,
            }))
          }
        />
        <ActionBarItem
          text="Traits"
          icon={
            <img
              src={"../../../sword.png"}
              alt={"Sword Icon"}
              height={"28vh"}
              width={"28vh"}
            />
          }
          onClick={() =>
            setGameState((prev) => ({
              ...prev,
              activePage: Pages.traits,
            }))
          }
        />
      </Stack>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Paragraph
          text="Brain Unlocks"
          color={LABEL_TEXT_COLOR}
          size={TYPOGRAPHY_SIZES.label}
        />
        <ActionBarItem
          text="Crafting"
          icon={
            <img
              src={"../../../sword.png"}
              alt={"Sword Icon"}
              height={"28vh"}
              width={"28vh"}
            />
          }
          onClick={() =>
            setGameState((prev) => ({
              ...prev,
              activePage: Pages.settings,
            }))
          }
        />
      </Stack>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Paragraph
          text="Miscellaneous"
          color={LABEL_TEXT_COLOR}
          size={TYPOGRAPHY_SIZES.label}
        />
        <ActionBarItem
          text="Settings"
          icon={
            <img
              src={"../../../sword.png"}
              alt={"Sword Icon"}
              height={"28vh"}
              width={"28vh"}
            />
          }
          onClick={() =>
            setGameState((prev) => ({
              ...prev,
              activePage: Pages.settings,
            }))
          }
        />
      </Stack>
    </Stack>
  );
};
