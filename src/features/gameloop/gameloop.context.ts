import { createContext, useContext } from "react";

export const GameLoopContext = createContext<
  { attackProgress: number } | undefined
>(undefined);

export const useGameLoopContext = () => {
  const context = useContext(GameLoopContext);
  if (!context) {
    throw new Error("useGameLoopContext must be used within GameLoopProvider");
  }
  return context;
};
