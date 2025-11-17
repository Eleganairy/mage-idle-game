import { Button, Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import type { JSX } from "react";
import { DEFAULT_TEXT_COLOR } from "../../constants/colors";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";

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
        width={"380px"}
      >
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          {icon}
          <Paragraph
            text={text}
            color={DEFAULT_TEXT_COLOR}
            size={TYPOGRAPHY_SIZES.paragraph}
          />
        </Stack>
        <Paragraph
          text={rightText || ""}
          color={DEFAULT_TEXT_COLOR}
          size={TYPOGRAPHY_SIZES.paragraph}
        />
      </Stack>
    </Button>
  );
};
