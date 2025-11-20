import { Box } from "@mui/material";
import type { Area } from "../../features/game-state/game-state.types";
import {
  ACCENT_ERROR,
  ACCENT_SUCCESS,
  DISABLED_OVERLAY,
} from "../../constants/colors";

export type BlockState = "locked" | "unlocked" | "active";

export type AreaSelectionBlockProps = {
  Area: Area;
  blockState: BlockState;
  setArea: (Area: Area) => void;
};

export const AreaSelectionBlock = ({
  Area,
  blockState,
  setArea,
}: AreaSelectionBlockProps) => {
  const getBackgroundColor = () => {
    switch (blockState) {
      case "locked":
        return DISABLED_OVERLAY;
      case "unlocked":
        return ACCENT_ERROR;
      case "active":
        return ACCENT_SUCCESS;
      default:
        return DISABLED_OVERLAY;
    }
  };

  const isInteractive = blockState !== "locked";

  return (
    <Box sx={{ marginBottom: 1 }}>
      <Box
        sx={{
          border: "4px solid black",
          bgcolor: getBackgroundColor(),
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: isInteractive ? "auto" : "none",
          opacity: blockState === "locked" ? 0.5 : 1,
          cursor: isInteractive ? "pointer" : "default",
        }}
        onClick={isInteractive ? () => setArea(Area) : undefined}
      >
        {Area.AreaNumber}
      </Box>
    </Box>
  );
};
