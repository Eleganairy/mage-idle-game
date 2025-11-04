import { useEffect, useState } from "react";

// Make an attack every set amount of time based on player attack speed
//TODO: Implement logic for bosses that attack back and other features
export const useGameLoop = ({
  endTime,
  onTimeEnd,
}: {
  endTime: number;
  onTimeEnd: () => void;
}) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (elapsedTime + 1 >= endTime * 100) {
        onTimeEnd();
        setElapsedTime(0);
        return;
      }
      setElapsedTime((prev) => prev + 1);
    }, 10);

    return () => clearInterval(interval);
  });

  return elapsedTime;
};
