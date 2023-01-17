import { Fragment } from "react";
import { useChangeRate } from "../data-access/hooks/useChangeRate";
import { useEurInfo } from "../data-access/hooks/useEurInfo";
import { useIsUp } from "../data-access/hooks/useIsUp";
import ColorSpan from "../style/ColorSpan";
import Span from "../style/Span";
import { addComma } from "../utils/addComma";
import UpNDown from "./UpNDown";

const ChangePrice = () => {
  const eurInfo = useEurInfo();
  const isUp = useIsUp();
  const changeRate = useChangeRate();
  return (
    <Fragment>
      <UpNDown />
      <Span size={30}>{addComma(Math.floor(eurInfo.basePrice))}</Span>
      <ColorSpan isUp={isUp}>
        {isUp ? "+" : "-"}
        {Math.floor(eurInfo.changePrice)}원
      </ColorSpan>{" "}
      <ColorSpan isUp={isUp}>({changeRate}%)</ColorSpan>
    </Fragment>
  );
};

export default ChangePrice;
