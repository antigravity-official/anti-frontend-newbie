import Span from "../style/Span";
import { addComma } from "../utils/addComma";

interface DisplayPriceProps {
  price: number;
  size?: number;
  prefix?: string;
  suffix?: string;
}

const DisplayPrice: React.FC<DisplayPriceProps> = ({
  price,
  size = 24,
  prefix,
  suffix,
}) => {
  return (
    <p>
      {prefix}
      <Span size={size}>{addComma(Math.floor(price))}</Span>
      {suffix}
    </p>
  );
};

export default DisplayPrice;
