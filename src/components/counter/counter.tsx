import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { Paragraph } from "../paragraph";

export type CounterProps = {
  name: string;
  value: number;
};

export const Counter = ({ name, value }: CounterProps) => {
  return (
    <Paragraph
      color="white"
      text={`${name}: ${value}`}
      size={TYPOGRAPHY_SIZES.counter}
    />
  );
};
