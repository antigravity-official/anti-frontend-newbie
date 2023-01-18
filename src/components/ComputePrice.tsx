import React from "react";
import { Block2 } from "../styles/Styles";
import { marking } from "../utils/condition"
import { useSampleState, useSampleDispatch } from "../Models/Context"

export const ComputePrice = () => {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  return (
    <Block2>
      <div className="Center">
        <div className="Content">살때 : {marking(state.cashBuyingPrice)}</div>
        <div className="Content">팔때 : {marking(state.cashSellingPrice)}</div>
        <div className="Content">보낼때 : {marking(state.ttSellingPrice)}</div>
        <div className="Content">받을때 : {marking(state.ttBuyingPrice)}</div>
      </div>
    </Block2>
  );
}

export default ComputePrice;
