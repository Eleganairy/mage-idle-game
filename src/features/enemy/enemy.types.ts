export interface EnemyStats {
  name: string;
  health: number;
  currentHealth: number;
  currencyDropReward: number;
  attackDamage: number;
  attackSpeed: number; // in milliseconds
  icon?: string;
}
