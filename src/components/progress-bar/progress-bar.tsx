import { Box } from "@mui/material";

export type ProgressBarProps = {
  progress: number;
  color: string;
};

export const ProgressBar = ({ progress, color }: ProgressBarProps) => {
  return (
    <Box sx={{ border: "4px solid black", width: "200px", height: "20px" }}>
      <Box
        sx={{
          backgroundColor: color,
          width: `${progress}%`,
          height: "20px",
        }}
      />
    </Box>
  );
};
