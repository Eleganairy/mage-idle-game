import { Box, Stack } from "@mui/material";
import { ActionBarItem } from ".";
import { Paragraph } from "../paragraph";
import DeleteIcon from "@mui/icons-material/Delete";
import { DEFAULT_TEXT_COLOR, LABEL_TEXT_COLOR } from "../../constants/colors";
import { useAtomValue, useSetAtom } from "jotai";
import { Pages } from "../../features/game-state/game-state.types";
import {
  activePageAtom,
  activeStageNumberAtom,
  activeWorldAtom,
} from "../../features/game-state/game-state.atoms";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";

export const ActionBar = () => {
  const setActivePage = useSetAtom(activePageAtom);
  const activeStageNumber = useAtomValue(activeStageNumberAtom);
  const activeWorld = useAtomValue(activeWorldAtom);

  return (
    <Stack spacing={2}>
      <Box sx={{ padding: 2 }}>
        <ActionBarItem
          text="Battlefield"
          rightText={`Stage ${activeWorld.worldNumber} - ${activeStageNumber}`}
          onClick={() => setActivePage(Pages.battlefield)}
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
          icon={
            <img
              src={"../../../Sword_Pixel_art.png"}
              alt={"Sword Icon"}
              height={"28vh"}
              width={"28vh"}
            />
          }
          onClick={() => setActivePage(Pages.upgrades)}
        />
      </Stack>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Paragraph
          text="Across generations"
          color={LABEL_TEXT_COLOR}
          size={TYPOGRAPHY_SIZES.label}
        />
        <ActionBarItem
          text="Skill Tree"
          icon={<DeleteIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        />
        <ActionBarItem
          text="Skill Tree"
          icon={<DeleteIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        />
      </Stack>
    </Stack>
  );
};
