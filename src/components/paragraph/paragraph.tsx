import { Box } from "@mui/material";
import type { TYPOGRAPHY_SIZES } from "../../constants/typography";

type ParagraphProps = {
  text: string;
  color?: string;
  size: TYPOGRAPHY_SIZES;
};

export const Paragraph = ({ text, color, size }: ParagraphProps) => {
  return (
    <Box
      sx={{
        color: color,
        fontSize: size,
      }}
    >
      {text}
    </Box>
  );
};
