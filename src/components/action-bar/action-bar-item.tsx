import { Button, Stack } from "@mui/material";
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
    <Button onClick={onClick} sx={{ justifyContent: "start" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"30px"}
      >
        <Stack direction={"row"} spacing={3} width={"300px"}>
          {icon}
          <Paragraph text={text} color={DEFAULT_TEXT_COLOR} />
        </Stack>
        <Paragraph text={rightText || ""} color={DEFAULT_TEXT_COLOR} />
      </Stack>
    </Button>
  );
};
