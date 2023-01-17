import React from "react";
import styled from "styled-components";
import EurInfoViewModel from "../viewModel/EurInfoViewModel";

const EurInfoView = () => {
  const { eurInfo } = EurInfoViewModel();

  return (
    <EurInfoContainer>
      <OneEur>환율기준 (1 유로)</OneEur>
      <RealTimeInfo>
        {eurInfo.basePrice}
        <RealTimeExchange base="up">{eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}</RealTimeExchange>
        <RealTimeExchange base="down">{eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}</RealTimeExchange>
        {eurInfo.changePrice}원 ({(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </RealTimeInfo>
      <TransactionInfo>
        <TransactionContent>살때 : {eurInfo.cashBuyingPrice}</TransactionContent>
        <TransactionContent>팔때 : {eurInfo.cashSellingPrice}</TransactionContent>
        <TransactionContent>보낼때 : {eurInfo.ttSellingPrice}</TransactionContent>
        <TransactionContent>받을때 : {eurInfo.ttBuyingPrice}</TransactionContent>
      </TransactionInfo>
    </EurInfoContainer>
  );
};

export default EurInfoView;

const EurInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OneEur = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 0 5px;
`;

const RealTimeInfo = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 5px;
`;

const RealTimeExchange = styled.span<{ base: string }>`
  color: ${(props) => (props.base === "up" ? "#d92237" : "#004fa1")};
  padding-left: 5px;
`;

const TransactionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const TransactionContent = styled.div`
  padding: 10px;
  margin: 0 5px;
  background-color: #339af0;
  color: #ffffff;
  border: none;
  border-radius: 5px;
`;
