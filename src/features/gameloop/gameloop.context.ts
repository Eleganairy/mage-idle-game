import { createContext, useContext } from "react";

interface GameLoopContextType {
  playerAttackProgress: number;
  enemyAttackProgress: number;
}

export const GameLoopContext = createContext<GameLoopContextType | undefined>(
  undefined
);

export const useGameLoopContext = () => {
  const context = useContext(GameLoopContext);
  if (!context) {
    throw new Error("useGameLoopContext must be used within GameLoopProvider");
  }
  return context;
};
