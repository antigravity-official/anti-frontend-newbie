import React from "react";
import styled from "styled-components";
import { PriceType } from "../types/types";

const BasePriceComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 1rem;
  padding: 1.5rem;
`;

const BasePriceEl = styled.div``;

const UpAndDownEl = styled.div``;

const ChangePriceEl = styled.div``;

const CurrentBasePrice = ({ basePrice, openingPrice, changePrice }: PriceType): JSX.Element => {
  const changePercent = ((changePrice / basePrice) * 100).toFixed(2);

  return (
    <BasePriceComponent>
      <BasePriceEl>{basePrice}</BasePriceEl>
      <UpAndDownEl>
        {basePrice > openingPrice ? "📈" : "📉"}
        {changePrice}원
      </UpAndDownEl>
      <ChangePriceEl>
        {basePrice > openingPrice ? "+" : "-"}
        {changePercent}%
      </ChangePriceEl>
    </BasePriceComponent>
  );
};

export default CurrentBasePrice;
