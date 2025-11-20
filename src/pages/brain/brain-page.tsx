import { Box, Button, Tooltip } from "@mui/material";
import { useAtom } from "jotai";
import {
  brainCellPointsAtom,
  spentBrainCellPointsAtom,
  upgradedButtonsAtom,
} from "../../features/brain/brain.atoms";
import { BRAIN_UPGRADES } from "../../features/brain/brain.constants";
import type { ButtonPosition } from "../../features/brain/brain.types";
import { Paragraph } from "../../components/paragraph";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { canUpgrade } from "../../features/brain/brain.helpers";
import * as Colors from "../../constants/colors";

export const BrainPage = () => {
  const [brainCellPoints, setBrainCellPoints] = useAtom(brainCellPointsAtom);
  const [spentBrainCellPoints, setSpentBrainCellPoints] = useAtom(
    spentBrainCellPointsAtom
  );
  const [upgradedButtons, setUpgradedButtons] = useAtom(upgradedButtonsAtom);

  const buttonPositions: ButtonPosition[] = BRAIN_UPGRADES;

  const handleUpgrade = (buttonId: number) => {
    const button = buttonPositions.find((b) => b.id === buttonId);

    if (
      !button ||
      !canUpgrade(upgradedButtons, buttonId) ||
      upgradedButtons.has(buttonId)
    ) {
      return;
    }

    if (brainCellPoints < button.cost) {
      alert(
        `Not enough Brain Cell Points! Need ${button.cost}, have ${brainCellPoints}`
      );
      return;
    }

    setBrainCellPoints((prev) => prev - button.cost);
    setSpentBrainCellPoints((prev) => prev + button.cost);
    setUpgradedButtons((prev) => new Set([...prev, buttonId]));
  };

  const getButtonStyle = (buttonId: number) => {
    const button = buttonPositions.find((b) => b.id === buttonId);
    const isUpgraded = upgradedButtons.has(buttonId);
    const canBeUpgraded = canUpgrade(upgradedButtons, buttonId);
    const notEnoughBrainCells = (button?.cost || 0) > brainCellPoints;

    if (isUpgraded) {
      return {
        backgroundColor: Colors.BRAIN_UPGRADED_BACKGROUND,
        border: `2px solid ${Colors.BRAIN_UPGRADED_BORDER}`,
        cursor: "pointer",
      };
    }

    if (canBeUpgraded && !notEnoughBrainCells) {
      return {
        backgroundColor: Colors.BRAIN_AVAILABLE_BACKGROUND,
        border: `2px solid ${Colors.BRAIN_AVAILABLE_BORDER}`,
        cursor: "pointer",
      };
    }

    if (canBeUpgraded && notEnoughBrainCells) {
      return {
        backgroundColor: Colors.BRAIN_INSUFFICIENT_BACKGROUND,
        border: `2px solid ${Colors.BRAIN_INSUFFICIENT_BORDER}`,
        cursor: "pointer",
      };
    }

    return {
      backgroundColor: Colors.BRAIN_LOCKED_BACKGROUND,
      border: `2px solid ${Colors.BRAIN_LOCKED_BORDER}`,
      color: Colors.BRAIN_LOCKED_TEXT,
    };
  };

  const getTooltipContent = (button: ButtonPosition) => {
    const isUpgraded = upgradedButtons.has(button.id);
    const canBeUpgraded = canUpgrade(upgradedButtons, button.id);

    return (
      <Box sx={{ padding: 1 }}>
        <Box
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            color: Colors.BRAIN_TOOLTIP_TEXT,
          }}
        >
          {button.name}
        </Box>
        <Box
          sx={{
            fontSize: "12px",
            marginBottom: 1.5,
            whiteSpace: "pre-line",
            color: Colors.BRAIN_AVAILABLE_BACKGROUND,
          }}
        >
          {button.description}
          {button.id === 1 && ` ${spentBrainCellPoints * 10}%`}
        </Box>
        <Box sx={{ fontSize: "11px", color: Colors.BRAIN_TOOLTIP_TEXT }}>
          {isUpgraded
            ? "✓ Upgraded"
            : canBeUpgraded
            ? `Cost: ${button.cost}`
            : "⚠ Previous upgrade required"}
        </Box>
      </Box>
    );
  };

  const renderLines = () => {
    return buttonPositions.map((button) =>
      button.connectedTo.map((targetId) => {
        const target = buttonPositions.find((b) => b.id === targetId);
        if (!target) return null;

        const isPathUpgraded =
          upgradedButtons.has(button.id) && upgradedButtons.has(targetId);

        return (
          <line
            key={`${button.id}-${targetId}`}
            x1={`${button.x}%`}
            y1={`${button.y}%`}
            x2={`${target.x}%`}
            y2={`${target.y}%`}
            stroke={isPathUpgraded ? Colors.BRAIN_UPGRADED_BORDER : "black"}
            strokeWidth={isPathUpgraded ? 3 : 2}
            opacity={isPathUpgraded ? 0.8 : 0.4}
          />
        );
      })
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "90vh",
        backgroundColor: Colors.BACKGROUND_COLOR,
        overflow: "hidden",
      }}
    >
      {/* Brain Cell Points Display - Top Right */}
      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
          backgroundColor: Colors.CARD_COLOR,
          padding: 2,
          border: `3px solid ${Colors.BORDER_PRIMARY}`,
          borderRadius: "4px",
        }}
      >
        <Paragraph
          text={`Brain Cell Points: ${brainCellPoints}`}
          size={TYPOGRAPHY_SIZES.button}
          color={Colors.DEFAULT_TEXT_COLOR}
        />
      </Box>

      {/* SVG for connection lines */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {renderLines()}
      </svg>

      {/* Buttons */}
      {buttonPositions.map((button) => {
        const isUpgraded = upgradedButtons.has(button.id);
        const canBeUpgraded = canUpgrade(upgradedButtons, button.id);
        const notEnoughBrainCells = (button?.cost || 0) > brainCellPoints;

        return (
          <Tooltip
            key={button.id}
            title={getTooltipContent(button)}
            arrow
            placement="top"
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
                  color: Colors.DEFAULT_TEXT_COLOR,
                  fontSize: "14px",
                  border: `2px solid black`,
                },
              },
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleUpgrade(button.id)}
              sx={{
                position: "absolute",
                left: `${button.x}%`,
                top: `${button.y}%`,
                transform: "translate(-50%, -50%)",
                width: button.id === 1 ? "100px" : "60px",
                height: button.id === 1 ? "100px" : "60px",
                minWidth: "unset",
                ...getButtonStyle(button.id),
                fontSize: button.id === 1 ? "24px" : "16px",
                "&:hover": {
                  backgroundColor: isUpgraded
                    ? Colors.BRAIN_UPGRADED_HOVER
                    : canBeUpgraded && !notEnoughBrainCells
                    ? Colors.BRAIN_AVAILABLE_HOVER
                    : Colors.BRAIN_INSUFFICIENT_HOVER,
                },
              }}
            >
              {button.id}
            </Button>
          </Tooltip>
        );
      })}
    </Box>
  );
};
