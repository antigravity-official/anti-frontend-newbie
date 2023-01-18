import React from "react";
import { Block1 } from "../styles/Styles"
import { marking, Round } from "../utils/condition"
import { useSampleState, useSampleDispatch } from "../Models/Context"

export const ShowPrice = () => {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  return (
    <Block1>
      <div className="Title">환율기준 (1 유로)</div>
      <div className="Content">{marking(state.basePrice)}
        <span className="up">{state.basePrice - state.openingPrice > 0 && " ▲"}</span>
        <span className="down">{state.basePrice - state.openingPrice < 0 && " ▼"}</span>
      </div>
      <div className="Content"> {marking(state.changePrice)}원 ({Round((state.changePrice / state.basePrice) * 100)} %)</div>
    </Block1>
  );
}

export default ShowPrice;
