import { useEffect, useState } from "react";

export const useAttack = ({
  attackSpeed,
  isAttacking,
  onAttackComplete,
}: {
  attackSpeed: number;
  isAttacking: boolean;
  onAttackComplete: () => void;
}) => {
  const [attackProgress, setAttackProgress] = useState(0);

  useEffect(() => {
    let attackInterval: number | undefined;
    let progressInterval: number | undefined;

    if (isAttacking) {
      const remainingTime = attackSpeed * (1 - attackProgress / 100);

      // Start the attack interval with the remaining time
      attackInterval = setTimeout(() => {
        onAttackComplete();
        setAttackProgress(0);

        // Start a new interval for the next attack
        attackInterval = setInterval(() => {
          onAttackComplete();
          setAttackProgress(0);
        }, attackSpeed);
      }, remainingTime);

      // Start the progress interval
      progressInterval = setInterval(() => {
        setAttackProgress((prevProgress) => {
          const increment = (100 / attackSpeed) * 10;
          const newProgress = prevProgress + increment;
          return Math.min(newProgress, 100);
        });
      }, 10);
    }

    return () => {
      clearTimeout(attackInterval);
      clearInterval(progressInterval);
    };
  }, [isAttacking, attackSpeed, attackProgress, onAttackComplete]);

  return attackProgress;
};
