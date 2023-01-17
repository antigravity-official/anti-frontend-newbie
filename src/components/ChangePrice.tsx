import { useEurInfo } from "../data-access/hooks/useEurInfo";
import { useIsUp } from "../data-access/hooks/useIsUp";
import ColorSpan from "../style/ColorSpan";
import Span from "../style/Span";
import { addComma } from "../utils/addComma";
import UpNDown from "./UpNDown";

const ChangePrice = () => {
  const eurInfo = useEurInfo();
  const isUp = useIsUp();
  return (
    <div>
      <UpNDown />
      <Span size={30}>{addComma(Math.floor(eurInfo.basePrice))}</Span>
      <ColorSpan isUp={isUp}>
        {isUp ? "+" : "-"}
        {Math.floor(eurInfo.changePrice)}원
      </ColorSpan>{" "}
      <ColorSpan isUp={isUp}>
        ({((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
      </ColorSpan>
    </div>
  );
};

export default ChangePrice;
