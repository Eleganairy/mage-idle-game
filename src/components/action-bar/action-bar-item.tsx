import { Box, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import type { JSX } from "react";
import { DEFAULT_TEXT_COLOR } from "../../constants/colors";

type ActionBarItemProps = {
  icon?: JSX.Element;
  text: string;
  rightText?: string;
};

export const ActionBarItem = ({
  icon,
  text,
  rightText,
}: ActionBarItemProps) => {
  return (
    <Box
      sx={{
        height: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Stack direction={"row"} spacing={1}>
        {icon}
        <Paragraph text={text} color={DEFAULT_TEXT_COLOR} />
      </Stack>
      <Paragraph text={rightText || ""} color={DEFAULT_TEXT_COLOR} />
    </Box>
  );
};
