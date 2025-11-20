import { Stack } from "@mui/material";
import { Paragraph } from "../paragraph";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { ProgressBar } from "../progress-bar";
import { ACCENT_SUCCESS } from "../../constants/colors";

interface HealthBarProps {
  current: number;
  max: number;
  showLabel?: boolean;
}

export const HealthBar = ({
  current,
  max,
  showLabel = true,
}: HealthBarProps) => {
  const percentage = (current / max) * 100;

  return (
    <Stack spacing={1} alignItems="center">
      <ProgressBar progress={percentage} color={ACCENT_SUCCESS} />
      {showLabel && (
        <Paragraph text={`${current} / ${max}`} size={TYPOGRAPHY_SIZES.label} />
      )}
    </Stack>
  );
};
