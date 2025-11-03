import { Box, Button, Stack } from "@mui/material";
import type { JSX } from "react";
import { Paragraph } from "../paragraph";
import { DEFAULT_TEXT_COLOR } from "../../constants/colors";

export type SmallUpgradeBlockProps = {
  icon: JSX.Element;
  description: string;
  currentUpgrades: number;
  totalUpgrades: number;
  onClick: () => void;
  affix?: "%" | "x" | "";
};

export const SmallUpgradeBlock = ({
  icon,
  description,
  currentUpgrades,
  totalUpgrades,
  onClick,
  affix,
}: SmallUpgradeBlockProps) => {
  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {icon}
        <Box>
          <Paragraph text={description} color={DEFAULT_TEXT_COLOR} />
        </Box>
        <Paragraph
          text={`${currentUpgrades}/${totalUpgrades}${affix || ""}`}
          color={DEFAULT_TEXT_COLOR}
        />
        <Button onClick={onClick} sx={{ color: DEFAULT_TEXT_COLOR }}>
          Upgrade
        </Button>
      </Stack>
    </Box>
  );
};
