import { DEFAULT_TEXT_COLOR } from "../../constants/colors";
import { TYPOGRAPHY_SIZES } from "../../constants/typography";
import { Paragraph } from "../paragraph";

export type CounterProps = {
  name: string;
  value: number;
};

export const Counter = ({ name, value }: CounterProps) => {
  return (
    <Paragraph
      color={DEFAULT_TEXT_COLOR}
      text={`${name}: ${value}`}
      size={TYPOGRAPHY_SIZES.counter}
    />
  );
};
