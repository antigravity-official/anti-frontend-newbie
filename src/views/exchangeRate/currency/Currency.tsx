import React from "react";
import styled from "styled-components";
import { FetchData } from "../types";

const Currency = ({ eurInfo }: { eurInfo: FetchData }) => {
  return (
    <div>
      <Title>환율기준 (1 유로)</Title>
      <ContentContainer>
        {Math.floor(eurInfo.basePrice).toLocaleString()}{" "}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice.toLocaleString()}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </ContentContainer>
      <PriceContainer>
        <PriceList>살때 : {eurInfo.cashBuyingPrice.toLocaleString()}</PriceList>
        <PriceList>
          팔때 : {eurInfo.cashSellingPrice.toLocaleString()}
        </PriceList>
        <PriceList>
          보낼때 : {eurInfo.ttSellingPrice.toLocaleString()}
        </PriceList>
        <PriceList>받을때 : {eurInfo.ttBuyingPrice.toLocaleString()}</PriceList>
      </PriceContainer>
    </div>
  );
};

export default Currency;

const Title = styled.h1``;
const ContentContainer = styled.div``;
const PriceContainer = styled.ul``;
const PriceList = styled.li``;
