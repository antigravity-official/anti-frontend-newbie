import { Fragment } from "react";
import { useBasePrice } from "../data-access/hooks/useBasePrice";
import { useChangePrice } from "../data-access/hooks/useChangePrice";
import { useChangeRate } from "../data-access/hooks/useChangeRate";
import { useIsUp } from "../data-access/hooks/useIsUp";
import ColorSpan from "../style/ColorSpan";
import Span from "../style/Span";
import { addComma } from "../utils/addComma";
import UpNDown from "./UpNDown";

const ChangePrice = () => {
  const isUp = useIsUp();
  const changeRate = useChangeRate();
  const basePrice = useBasePrice();
  const changePrice = useChangePrice();
  return (
    <Fragment>
      <UpNDown />
      <Span size={30}>{addComma(Math.floor(basePrice))}</Span>
      <ColorSpan isUp={isUp}>
        {isUp ? "+" : "-"}
        {Math.floor(changePrice)}원
      </ColorSpan>{" "}
      <ColorSpan isUp={isUp}>({changeRate}%)</ColorSpan>
    </Fragment>
  );
};

export default ChangePrice;
