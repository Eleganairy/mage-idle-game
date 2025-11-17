import { useEffect, useState, useRef } from "react";

export const useGameLoop = ({
  endTime,
  onTimeEnd,
  resetTrigger,
}: {
  endTime: number;
  onTimeEnd: () => void;
  resetTrigger?: number; // Optional trigger to reset the loop
}) => {
  const [attackProgress, setAttackProgress] = useState(0);
  const lastTickRef = useRef<number>(Date.now());
  const accumulatedTimeRef = useRef<number>(0);

  // Reset the loop when resetTrigger changes
  useEffect(() => {
    if (resetTrigger !== undefined) {
      accumulatedTimeRef.current = 0;
      setAttackProgress(0);
      lastTickRef.current = Date.now();
    }
  }, [resetTrigger]);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const deltaTime = now - lastTickRef.current;
      lastTickRef.current = now;

      accumulatedTimeRef.current += deltaTime;

      // Calculate how many attacks should have happened
      const attackDuration = endTime * 1000; // Convert to milliseconds
      const completedAttacks = Math.floor(
        accumulatedTimeRef.current / attackDuration
      );

      if (completedAttacks > 0) {
        // Trigger attacks for all completed cycles
        for (let i = 0; i < completedAttacks; i++) {
          onTimeEnd();
        }
        accumulatedTimeRef.current -= completedAttacks * attackDuration;
      }

      // Calculate progress as percentage (0-100)
      const progress = (accumulatedTimeRef.current / attackDuration) * 100;
      setAttackProgress(Math.min(progress, 100));
    };

    // Use requestAnimationFrame for smooth updates
    let animationFrameId: number;
    const loop = () => {
      tick();
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [endTime, onTimeEnd]);

  return attackProgress;
};
