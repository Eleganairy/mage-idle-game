import { Box, Button, Stack } from "@mui/material";
import type { JSX } from "react";
import { Paragraph } from "../paragraph";
import {
  CARD_COLOR,
  CARD_SECONDARY_COLOR,
  DEFAULT_TEXT_COLOR,
} from "../../constants/colors";
import type { Upgrade } from "../../features/upgrades/upgrades.types";
import { ModifierTypes } from "../../features/player/player.types";

export type SmallUpgradeBlockProps = {
  icon: JSX.Element;
  upgrade: Upgrade;
  canAfford: boolean;
  onClick: () => void;
};

export const SmallUpgradeBlock = ({
  icon,
  upgrade,
  canAfford,
  onClick,
}: SmallUpgradeBlockProps) => {
  const getUpgradeAffix = () => {
    switch (upgrade.modifierType) {
      case ModifierTypes.ADDITIVE:
        return "+";
      case ModifierTypes.MULTIPLICATIVE:
        return "x";
      case ModifierTypes.PERCENTILE:
        return "%";
      default:
        return "";
    }
  };

  const getUpgradeText = () => {
    if (upgrade.modifierType === ModifierTypes.PERCENTILE) {
      return `${
        upgrade.upgradeValue * upgrade.currentUpgrades
      }${getUpgradeAffix()} > ${
        upgrade.upgradeValue * (upgrade.currentUpgrades + 1)
      }${getUpgradeAffix()}`;
    }
    if (upgrade.modifierType === ModifierTypes.MULTIPLICATIVE) {
      return `${
        upgrade.upgradeValue * upgrade.currentUpgrades + 1
      }${getUpgradeAffix()} > ${
        upgrade.upgradeValue * (upgrade.currentUpgrades + 1) + 1
      }${getUpgradeAffix()}`;
    }
    return `${getUpgradeAffix()}${
      upgrade.upgradeValue * upgrade.currentUpgrades
    } > ${getUpgradeAffix()}${
      upgrade.upgradeValue * (upgrade.currentUpgrades + 1)
    }`;
  };

  return (
    <Box
      sx={{
        margin: "20px",
        padding: "10px",
        width: "90%",
        height: "10vh",
        backgroundColor: CARD_COLOR,
        borderRadius: "0.5vh",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box marginLeft={"15px"}>{icon}</Box>
        <Box
          sx={{
            width: "60%",
            height: "10vh",
            backgroundColor: CARD_SECONDARY_COLOR,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "0.5vh",
          }}
        >
          <Paragraph text={`${upgrade.name}`} color={DEFAULT_TEXT_COLOR} />
          <Paragraph text={getUpgradeText()} color={DEFAULT_TEXT_COLOR} />
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paragraph
            text={`${upgrade.currentUpgrades} / ${upgrade.upgradesCap}`}
            color={DEFAULT_TEXT_COLOR}
          />
          <Button
            onClick={onClick}
            sx={{
              backgroundColor: canAfford ? "darkred" : "darkgreen",
              margin: "10px",
              height: "5vh",
              width: "10vh",
              fontSize: "2vh",
              color: DEFAULT_TEXT_COLOR,
            }}
          >
            {upgrade.cost}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
