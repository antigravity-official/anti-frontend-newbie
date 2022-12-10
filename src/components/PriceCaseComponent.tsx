import React from "react";
import styled from "styled-components";
import { PriceType } from "../types/types";
import PriceComponent from "./public/PriceComponent";

interface ElementType {
  color?: string;
}

const SeparationBox = styled.div`
  margin: 0.6rem;
`;

const CaseElement = styled.div<ElementType>`
  font-weight: 500;
  color: ${props => props.color};
`;

const PriceCaseComponent = ({
  cashBuyingPrice,
  cashSellingPrice,
  ttSellingPrice,
  ttBuyingPrice,
}: PriceType) => {
  return (
    <PriceComponent>
      <SeparationBox>
        <CaseElement color={"#ff4646"}>살때 : {cashBuyingPrice.toLocaleString()}</CaseElement>
        <CaseElement color={"#1e96ff"}>팔때 : {cashSellingPrice.toLocaleString()}</CaseElement>
      </SeparationBox>
      <SeparationBox>
        <CaseElement color={"#ff4646"}>보낼때 : {ttSellingPrice.toLocaleString()}</CaseElement>
        <CaseElement color={"#1e96ff"}>받을때 : {ttBuyingPrice.toLocaleString()}</CaseElement>
      </SeparationBox>
    </PriceComponent>
  );
};

export default PriceCaseComponent;
