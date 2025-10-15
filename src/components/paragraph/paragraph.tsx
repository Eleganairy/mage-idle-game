import { Box } from "@mui/material";

type ParagraphProps = {
  text: string;
  color?: string;
  size?: "small" | "medium" | "large" | "counter";
};

export const Paragraph = ({ text, color, size }: ParagraphProps) => {
  const fontSize = () => {
    switch (size) {
      case "small":
        return "12px";
      case "medium":
        return "16px";
      case "large":
        return "20px";
      case "counter":
        return "52px";
      default:
        return "16px";
    }
  };

  return (
    <Box
      sx={{
        color: color,
        fontSize: fontSize(),
        fontWeight: size === "counter" ? "600" : "400",
      }}
    >
      {text}
    </Box>
  );
};
