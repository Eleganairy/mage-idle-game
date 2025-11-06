import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { SmallUpgradeBlock } from "../../components/upgrade-block";
import { DEFAULT_TEXT_COLOR } from "../../constants/colors";
import { useAtom } from "jotai";
import { playerUpgradesAtom } from "../../features/upgrades/upgrades.atoms";
import { playerStatsAtom } from "../../features/player/player.atoms";
import { Upgrades } from "../../features/upgrades/upgrades.types";
// import {
//   updatedPlayerStats,
//   updatedPlayerUpgrades,
// } from "../../features/upgrades/upgrades.hooks";

export const UpgradesPage = () => {
  const [playerStats, setPlayerStats] = useAtom(playerStatsAtom);
  const [playerUpgrades, setPlayerUpgrades] = useAtom(playerUpgradesAtom);

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

  const handleUpgrade = (name: Upgrades) => {
    // setPlayerUpgrades(updatedPlayerUpgrades(name, playerUpgrades, playerStats));
    // setPlayerStats(
    //   updatedPlayerStats(
    //     name,
    //     playerUpgrades.filter((upgrade) => upgrade.name === name)[0],
    //     playerStats
    //   )
    // );
    console.log("Upgrading:", name);
    setPlayerUpgrades(
      playerUpgrades.map((upgrade) => {
        // Gets the correct upgrade from the upgrades array
        if (upgrade.name === name) {
          // Checks if the upgrade can be applied
          if (
            upgrade.currentUpgrades >= upgrade.upgradesCap ||
            playerStats.money < upgrade.cost
          )
            return upgrade;
          // Applies the upgrade
          return {
            ...upgrade,
            currentUpgrades: upgrade.currentUpgrades + 1,
            upgradeValue: upgrade.upgradeValue + 1,
          };
        }
        // Returns the upgrade unchanged if it's not the one being updated
        return upgrade;
      })
    );
    setPlayerStats(() => {
      const upgrade = playerUpgrades.filter(
        (upgrade) => upgrade.name === name
      )[0];
      console.log(upgrade);
      switch (name) {
        case Upgrades.ATTACK_DAMAGE:
          // Updates the player's attack damage modifier
          return {
            ...playerStats,
            money: playerStats.money - upgrade.cost,
            attackDamageModifiers: playerStats.attackDamageModifiers.map(
              (modifier) => {
                if (modifier.name === "Attack Damage Upgrade") {
                  return {
                    ...modifier,
                    tier: upgrade.currentUpgrades + 1,
                    value: upgrade.upgradeValue + 1,
                  };
                }
                return modifier;
              }
            ),
          };
        case Upgrades.ATTACK_SPEED:
          // Updates the player's attack speed modifier
          return {
            ...playerStats,
            attackDamageModifiers: playerStats.attackDamageModifiers.map(
              (modifier) => {
                if (modifier.name === "Attack Speed Upgrade") {
                  return {
                    ...modifier,
                    tier: upgrade.currentUpgrades + 1,
                    value: upgrade.upgradeValue + 0.2,
                  };
                }
                return modifier;
              }
            ),
          };
        case Upgrades.HEALTH:
          // Updates the player's health modifier
          return {
            ...playerStats,
            attackDamageModifiers: playerStats.attackDamageModifiers.map(
              (modifier) => {
                if (modifier.name === "Health Upgrade") {
                  return {
                    ...modifier,
                    tier: upgrade.currentUpgrades + 1,
                    value: upgrade.upgradeValue + 10,
                  };
                }
                return modifier;
              }
            ),
          };
      }
    });
  };

  return (
    <Box>
      {playerUpgrades.map((upgrade) => {
        return (
          upgrade.currentUpgrades < upgrade.upgradesCap && (
            <SmallUpgradeBlock
              key={upgrade.name}
              icon={<StarIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
              description={`Upgrade ${upgrade.name
                .replace("_", " ")
                .toLowerCase()} + ${upgrade.upgradeValue}, total: + ${
                upgrade.currentUpgrades
              }`}
              currentUpgrades={upgrade.currentUpgrades}
              totalUpgrades={upgrade.upgradesCap}
              onClick={() => handleUpgrade(upgrade.name)}
            />
          )
        );
      })}
    </Box>
  );
};
