import React from "react";
import styled from "styled-components";
import { PriceType } from "../types/types";
import PriceComponent from "./public/PriceComponent";

interface ElementStyle {
  fontSize: string;
  fontWeight: number;
  marginBottom: string;
}

const ElementInPriceComponent = styled.div<ElementStyle>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin-bottom: ${props => props.marginBottom};
`;

const ChangePriceEl = styled.div`
  font-size: 1.1rem;
  color: ${props => props.color};
`;

const CurrentBasePrice = ({ basePrice, openingPrice, changePrice }: PriceType): JSX.Element => {
  const changePercent = ((changePrice / basePrice) * 100).toFixed(2);

  return (
    <PriceComponent>
      <ElementInPriceComponent fontSize={"1.3rem"} fontWeight={700} marginBottom={"0.2rem"}>
        {basePrice}원
      </ElementInPriceComponent>
      <ElementInPriceComponent fontSize={"1.2rem"} fontWeight={500} marginBottom={"0.7rem"}>
        {basePrice > openingPrice ? "📈 " : "📉 "}
        {changePrice}원
      </ElementInPriceComponent>
      <ChangePriceEl color={`${basePrice > openingPrice ? "red" : "blue"}`}>
        {basePrice > openingPrice ? "+" : "-"}
        {changePercent}%
      </ChangePriceEl>
    </PriceComponent>
  );
};

export default CurrentBasePrice;
