import { Box } from "@mui/material";
import { Paragraph } from "../paragraph";
import { useAtom, useAtomValue } from "jotai";
import {
  playerCurrencyAtom,
  playerStatsAtom,
} from "../../features/player/player.atoms";
import { useEffect, useState } from "react";
import { enemyStatsAtom } from "../../features/enemy/enemy.atoms";

export const Enemy = () => {
  const [playerCurrency, setPlayerCurrency] = useAtom(playerCurrencyAtom);
  const [enemyStats] = useAtom(enemyStatsAtom);
  const playerStats = useAtomValue(playerStatsAtom);

  const [playerIsAttacking, setPlayerIsAttacking] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (playerIsAttacking) {
      interval = setInterval(() => {
        attackEnemy();
      }, playerStats.attackSpeed);
    } else if (!playerIsAttacking && interval) {
      clearInterval(interval);
    }

    const attackEnemy = () => {
      setPlayerCurrency((curr) => curr + enemyStats.currencyDropReward);
    };

    return () => clearInterval(interval);
  }, [
    enemyStats.currencyDropReward,
    playerIsAttacking,
    playerStats,
    setPlayerCurrency,
  ]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("Enemy clicked");
    e.preventDefault();
    setPlayerCurrency(playerCurrency + 1);
    setPlayerIsAttacking(true);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setPlayerIsAttacking(false);
  };

  return (
    <Box
      sx={{
        border: "3px solid black",
        height: "700px",
        width: "400px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
    >
      <Paragraph text={"Enemy"} />
    </Box>
  );
};
