import { Box, Grid } from "@mui/material";
import { SmallUpgradeBlock } from "../../components/upgrade-block";
import { useAtom, useSetAtom } from "jotai";
import { playerUpgradesAtom } from "../../features/upgrades/upgrades.atoms";
import {
  playerCurrenciesAtom,
  syncHealthOnUpgradeAtom,
} from "../../features/player/player.atoms";
import type { Upgrade } from "../../features/upgrades/upgrades.types";
import { updatedPlayerStats } from "../../features/upgrades/upgrades.helpers";

export const UpgradesPage = () => {
  const [playerCurrencies, setPlayerCurrencies] = useAtom(playerCurrenciesAtom);
  const [playerUpgrades, setPlayerUpgrades] = useAtom(playerUpgradesAtom);
  const syncHealth = useSetAtom(syncHealthOnUpgradeAtom);

  const handleUpgrade = (upgrade: Upgrade) => {
    if (playerCurrencies < upgrade.cost) return;

    setPlayerCurrencies((prev) => prev - upgrade.cost);
    setPlayerUpgrades(updatedPlayerStats(upgrade.name, playerUpgrades));

    // Sync current health with new max health
    syncHealth();
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
                      alt={upgrade.name}
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
