export const getRequiredStagesForArea = (AreaNumber: number): number => {
  const BASE_REQUIRED_STAGES = 20;
  return BASE_REQUIRED_STAGES + (AreaNumber - 1) * 5;
};
