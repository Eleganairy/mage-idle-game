export type SmallUpgradeBlockProps = {
  icon: string;
  description: string;
  currentUpgrades: number;
  totalUpgrades: number;
  affix: "%" | "x" | "";
};

export const SmallUpgradeBlock = () => {
  return <div>Small Upgrade Block</div>;
};
