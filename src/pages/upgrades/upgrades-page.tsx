import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { SmallUpgradeBlock } from "../../components/upgrade-block";
import { DEFAULT_TEXT_COLOR } from "../../constants/colors";
import { useAtom } from "jotai";
import {
  IdleAttackUpgradeAtom,
  MainAttackUpgradeAtom,
} from "../../features/upgrades/upgrades.atoms";
import { playerStatsAtom } from "../../features/player/player.atoms";
import { idleStatsAtom } from "../../features/idle/idle.atoms";

export const UpgradesPage = () => {
  const [playerStats, setPlayerStats] = useAtom(playerStatsAtom);
  const [idleStats, setIdleStats] = useAtom(idleStatsAtom);
  const [mainAttackUpgrade, setMainAttackUpgrade] = useAtom(
    MainAttackUpgradeAtom
  );
  const [idleAttackUpgrade, setIdleAttackUpgrade] = useAtom(
    IdleAttackUpgradeAtom
  );

  const updatePlayerUpgrades = () => {
    const newAttackDamage =
      playerStats.attackDamage +
      (mainAttackUpgrade.currentUpgrades + 1) *
        mainAttackUpgrade.currentUpgrades;

    setPlayerStats((prev) => ({
      ...prev,
      attackDamage: newAttackDamage,
    }));

    setMainAttackUpgrade((prev) => ({
      ...prev,
      currentUpgrades: prev.currentUpgrades + 1,
    }));
  };

  const updateIdleUpgrades = () => {
    const newAttackDamage =
      idleStats.attackDamage +
      (idleAttackUpgrade.currentUpgrades + 1) *
        idleAttackUpgrade.currentUpgrades;

    setIdleStats((prev) => ({
      ...prev,
      attackDamage: newAttackDamage,
    }));

    setIdleAttackUpgrade((prev) => ({
      ...prev,
      currentUpgrades: prev.currentUpgrades + 1,
    }));
  };

  return (
    <Box>
      <SmallUpgradeBlock
        icon={<StarIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        description={"Upgrade main attack + 1"}
        currentUpgrades={mainAttackUpgrade.currentUpgrades}
        totalUpgrades={mainAttackUpgrade.totalUpgrades}
        onClick={() => updatePlayerUpgrades()}
      />
      <SmallUpgradeBlock
        icon={<StarIcon sx={{ color: DEFAULT_TEXT_COLOR }} />}
        description={"Upgrade idle attack + 1"}
        currentUpgrades={idleAttackUpgrade.currentUpgrades}
        totalUpgrades={idleAttackUpgrade.totalUpgrades}
        onClick={() => updateIdleUpgrades()}
      />
    </Box>
  );
};
