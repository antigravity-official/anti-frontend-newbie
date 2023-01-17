import Span from "../style/Span";
import { addComma } from "../utils/addComma";

interface DisplayPriceProps {
  price: number;
  prefix?: string;
  suffix?: string;
}

const DisplayPrice: React.FC<DisplayPriceProps> = ({
  price,
  prefix,
  suffix,
}) => {
  return (
    <p>
      {prefix}
      <Span size={24}>{addComma(Math.floor(price))}</Span>
      {suffix}
    </p>
  );
};

export default DisplayPrice;
