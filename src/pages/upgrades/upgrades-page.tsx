import { Box, Grid } from "@mui/material";
import { SmallUpgradeBlock } from "../../components/upgrade-block";
import { useAtom } from "jotai";
import { playerUpgradesAtom } from "../../features/upgrades/upgrades.atoms";
import { playerCurrenciesAtom } from "../../features/player/player.atoms";
import type { Upgrade } from "../../features/upgrades/upgrades.types";
import { updatedPlayerStats } from "../../features/upgrades/upgrades.helpers";

//TODO
//Each upgrade should do the following steps
// 1. Check if player has enough money
// 2. Deduct money from player
// 3. Increase the upgrade level
// 4. Update the player's stats with the new upgrade
//   // If the modifier already exists, update its value and tier
//  //   // If it doesn't exist, add a new modifier to the player's stats
// 5. Recalculate any derived stats if necessary
// 6. Provide feedback to the player (e.g., sound effect, visual effect)
// 7. Save the game state if applicable
// 8. Update the UI to reflect the new upgrade level and player's stats

export const UpgradesPage = () => {
  const [playerCurrencies, setPlayerCurrencies] = useAtom(playerCurrenciesAtom);
  const [playerUpgrades, setPlayerUpgrades] = useAtom(playerUpgradesAtom);

  const handleUpgrade = (upgrade: Upgrade) => {
    if (playerCurrencies < upgrade.cost) return;
    setPlayerCurrencies((prev) => prev - upgrade.cost);

    setPlayerUpgrades(updatedPlayerStats(upgrade.name, playerUpgrades));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {playerUpgrades.map((upgrade) => {
          return (
            upgrade.currentUpgrades < upgrade.upgradesCap && (
              <Grid size={{ xs: 12, md: 6 }} key={upgrade.name}>
                <SmallUpgradeBlock
                  icon={
                    <img
                      src={upgrade.icon}
                      alt="fireSpot"
                      height={"54vh"}
                      width={"54vh"}
                    />
                  }
                  upgrade={upgrade}
                  canAfford={playerCurrencies < upgrade.cost}
                  onClick={() => handleUpgrade(upgrade)}
                />
              </Grid>
            )
          );
        })}
      </Grid>
    </Box>
  );
};
