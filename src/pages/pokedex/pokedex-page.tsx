import { Box } from "@mui/material";
import { useAtomValue } from "jotai";
import { slainEnemiesCountAtom } from "../../features/enemy/enemy.atoms";
import { ALL_ENEMIES } from "../../features/enemy/enemy.constants";
import { Paragraph } from "../../components/paragraph";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { SlainThreshold } from "../../features/enemy/enemy.types";

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
      case SlainThreshold.gold:
        return {
          backgroundColor: "#ffd700",
          borderColor: "#b8860b",
        };
      case SlainThreshold.silver:
        return {
          backgroundColor: "#c0c0c0",
          borderColor: "#a9a9a9",
        };
      case SlainThreshold.bronze:
        return {
          backgroundColor: "#cd7f32",
          borderColor: "#8b4513",
        };
      default:
        return {
          backgroundColor: "#4646469a",
          borderColor: "#2f2f2f",
        };
    }
  };

  return (
    <Box sx={{ padding: 2 }} width={"100%"}>
      {Object.entries(slainEnemiesPerArea).map(([area, slainEnemies]) => {
        return (
          <Box key={area} sx={{ marginBottom: 4 }}>
            <h3>Area {area}</h3>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: 2,
              }}
            >
              {Object.entries(slainEnemies).map(([enemyKey, data]) => {
                const enemy = ALL_ENEMIES[enemyKey];
                return (
                  <Box
                    key={enemyKey}
                    sx={{
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
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
