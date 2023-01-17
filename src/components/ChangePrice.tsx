import { useEurInfo } from "../data-access/hooks/useEurInfo";
import { useIsUp } from "../data-access/hooks/useIsUp";
import ColorSpan from "../style/ColorSpan";
import Span from "../style/Span";
import { addComma } from "../utils/addComma";

const ChangePrice = () => {
  const eurInfo = useEurInfo();
  const isUp = useIsUp();
  return eurInfo && typeof isUp === "boolean" ? (
    <div>
      <ColorSpan isUp={isUp}>{isUp ? "▲" : "▼"}</ColorSpan>
      <Span size={30}>{addComma(Math.floor(eurInfo.basePrice))}</Span>
      <ColorSpan isUp={isUp}>
        {isUp ? "+" : "-"}
        {Math.floor(eurInfo.changePrice)}원
      </ColorSpan>{" "}
      <ColorSpan isUp={isUp}>
        ({((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
      </ColorSpan>
    </div>
  ) : (
    <div></div>
  );
};

export default ChangePrice;
