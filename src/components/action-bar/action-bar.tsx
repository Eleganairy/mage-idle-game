import { Box, Stack } from "@mui/material";
import { ActionBarItem } from ".";
import { Paragraph } from "../paragraph";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import { DEFAULT_TEXT_COLOR, LABEL_TEXT_COLOR } from "../../constants/colors";
import { useAtom } from "jotai";
import { playerStatsAtom } from "../../features/player/player.atoms";

export const ActionBar = () => {
  const [playerStats] = useAtom(playerStatsAtom);

  return (
    <Stack spacing={2}>
      <Box sx={{ padding: 2 }}>
        <ActionBarItem text="Battlefield" rightText="Level 1" />
      </Box>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Paragraph text="This prestige" color={LABEL_TEXT_COLOR} />
        <ActionBarItem
          text="Upgrades"
          rightText="1 / 100"
          icon={<StarIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        />
        <ActionBarItem
          text="Attack Damage"
          rightText={`${playerStats.attackDamage} dmg`}
          icon={<StarIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        />
        <ActionBarItem
          text="Attack Speed"
          rightText={`${playerStats.attackSpeed / 1000} p/s`}
          icon={<StarIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        />
      </Stack>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Paragraph text="Permanent Upgrades" color={LABEL_TEXT_COLOR} />
        <ActionBarItem
          text="Skill Tree"
          rightText="5 / 150"
          icon={<DeleteIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        />
        <ActionBarItem
          text="Skill Tree"
          rightText="5 / 150"
          icon={<DeleteIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        />
      </Stack>
    </Stack>
  );
};
