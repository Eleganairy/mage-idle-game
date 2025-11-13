import { useEffect, useState } from "react";

//TODO: Implement logic for bosses that attack back and other features
interface GameLoopContextType {
  attackProgress: number;
}

// Ensure the hook returns the typed object
export const useGameLoop: ({
  endTime,
  onTimeEnd,
}: {
  endTime: number;
  onTimeEnd: () => void;
}) => GameLoopContextType = ({
  endTime,
  onTimeEnd,
}: {
  endTime: number;
  onTimeEnd: () => void;
}) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        const newTime = prev + 1;

        if (newTime >= endTime * 100) {
          onTimeEnd();
          return 0;
        }

        return newTime;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [endTime, onTimeEnd]);

  // Convert elapsed time to progress percentage (0-100)
  const attackProgress = (elapsedTime / (endTime * 100)) * 100;

  return { attackProgress };
};
