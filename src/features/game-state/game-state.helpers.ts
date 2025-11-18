export const getRequiredStagesForWorld = (worldNumber: number): number => {
  const BASE_REQUIRED_STAGES = 20;
  return BASE_REQUIRED_STAGES + (worldNumber - 1) * 5;
};
