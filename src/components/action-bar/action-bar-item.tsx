import { Box, Button, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import type { JSX } from "react";
import { DEFAULT_TEXT_COLOR } from "../../constants/colors";

type ActionBarItemProps = {
  icon?: JSX.Element;
  text: string;
  rightText?: string;
  onClick?: () => void;
};

export const ActionBarItem = ({
  icon,
  text,
  rightText,
  onClick,
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
      <Button onClick={onClick}>
        <Stack direction={"row"} spacing={3}>
          {icon}
          <Paragraph text={text} color={DEFAULT_TEXT_COLOR} />
        </Stack>
        <Paragraph text={rightText || ""} color={DEFAULT_TEXT_COLOR} />
      </Button>
    </Box>
  );
};
