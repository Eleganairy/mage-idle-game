import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { SmallUpgradeBlock } from "../../components/upgrade-block";
import { DEFAULT_TEXT_COLOR } from "../../constants/colors";
import { useAtom } from "jotai";
import { MainAttackUpgradeAtom } from "../../features/upgrades/upgrades.atoms";
import { playerStatsAtom } from "../../features/player/player.atoms";
import { ModifierTypes } from "../../features/player/player.types";

export const UpgradesPage = () => {
  const [playerStats, setPlayerStats] = useAtom(playerStatsAtom);
  const [mainAttackUpgrade, setMainAttackUpgrade] = useAtom(
    MainAttackUpgradeAtom
  );

  const updatePlayerAttackDamage = () => {
    setMainAttackUpgrade((prev) => ({
      ...prev,
      currentUpgrades: prev.currentUpgrades + 1,
    }));

    if (
      playerStats.attackDamageModifiers.find(
        (modifier) => modifier.name === "Main Attack Damage Upgrade"
      )
    ) {
      setPlayerStats((prev) => {
        return {
          ...prev,
          attackDamageModifiers: prev.attackDamageModifiers.map((modifier) => {
            if (modifier.name === "Main Attack Damage Upgrade") {
              return {
                ...modifier,
                tier: mainAttackUpgrade.currentUpgrades,
                value: mainAttackUpgrade.currentUpgrades,
              };
            }
            return modifier;
          }),
        };
      });
    }

    setPlayerStats((prev) => {
      return {
        ...prev,
        attackDamageModifiers: [
          ...prev.attackDamageModifiers,
          {
            name: "Main Attack Damage Upgrade",
            type: ModifierTypes.ADDITIVE,
            tier: mainAttackUpgrade.currentUpgrades,
            value: 1,
          },
        ],
      };
    });
  };

  return (
    <Box>
      {mainAttackUpgrade.currentUpgrades < mainAttackUpgrade.totalUpgrades && (
        <SmallUpgradeBlock
          icon={<StarIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
          description={`Upgrade attack damage + 1, total: + ${mainAttackUpgrade.currentUpgrades}`}
          currentUpgrades={mainAttackUpgrade.currentUpgrades}
          totalUpgrades={mainAttackUpgrade.totalUpgrades}
          onClick={() => updatePlayerAttackDamage()}
        />
      )}
    </Box>
  );
};
