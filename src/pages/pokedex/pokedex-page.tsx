import { Box, Stack } from "@mui/material";
import { useAtomValue } from "jotai";
import { slainEnemiesCountAtom } from "../../features/enemy/enemy.atoms";
import { Paragraph } from "../../components/paragraph";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { SlainThreshold } from "../../features/enemy/enemy.types";
import { ACCENT_WARNING, HOVER_OVERLAY } from "../../constants/colors";
import { ALL_ENEMIES } from "../../features/enemy/constants/enemy-list.constants";

export const PokedexPage = () => {
  const slainEnemiesPerArea = useAtomValue(slainEnemiesCountAtom);

  const getBlockStyling = (
    threshold: SlainThreshold | undefined,
    value: number
  ) => {
    if (!threshold && value === 0) {
      return {
        backgroundColor: "#4646469a",
        borderColor: "#2f2f2f",
      };
    }

    if (!threshold && value > 0) {
      return {
        backgroundColor: "#8080809a",
        borderColor: "#505050",
      };
    }

    switch (threshold) {
      case SlainThreshold.GOLD:
        return {
          backgroundColor: ACCENT_WARNING,
          borderColor: "#b8860b",
        };
      case SlainThreshold.SILVER:
        return {
          backgroundColor: "#c0c0c0",
          borderColor: "#a9a9a9",
        };
      case SlainThreshold.BRONZE:
        return {
          backgroundColor: "#cd7f32",
          borderColor: HOVER_OVERLAY,
        };
      default:
        return {
          backgroundColor: "#4646469a",
          borderColor: "#2f2f2f",
        };
    }
  };

  return (
    <Box margin={2}>
      {Object.entries(slainEnemiesPerArea).map(([area, slainEnemies]) => {
        return (
          <Box key={area} sx={{ marginBottom: 2, paddingX: 2 }}>
            <Paragraph text={`Area ${area}`} size={TYPOGRAPHY_SIZES.button} />
            <Stack direction={"row"} justifyContent={"space-between"}>
              {Object.entries(slainEnemies).map(([enemyKey, data]) => {
                const enemy = ALL_ENEMIES[enemyKey];
                return (
                  <Box
                    key={enemyKey}
                    sx={{
                      width: "160px",
                      border: "2px solid black",
                      padding: 2,
                      textAlign: "center",
                      ...getBlockStyling(data.thresholdCrossed, data.count),
                    }}
                  >
                    <h4>{data.count ? enemy.name : "Locked"}</h4>
                    <Paragraph
                      text={`Slain: ${data.count}`}
                      size={TYPOGRAPHY_SIZES.paragraph}
                    />
                    {data.thresholdCrossed !== undefined ? (
                      <Paragraph
                        text={data.thresholdCrossed}
                        size={TYPOGRAPHY_SIZES.paragraph}
                      />
                    ) : (
                      <Paragraph
                        text={data.count ? "Unlocked" : "Locked"}
                        size={TYPOGRAPHY_SIZES.paragraph}
                      />
                    )}
                  </Box>
                );
              })}
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
};
