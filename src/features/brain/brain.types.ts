export interface ButtonPosition {
  id: number;
  x: number; // percentage from left
  y: number; // percentage from top
  connectedTo: number[]; // IDs of buttons this connects to
  cost: number; // Cost to upgrade
  name: string; // Name of the upgrade
  description: string; // Description of what it does
}
