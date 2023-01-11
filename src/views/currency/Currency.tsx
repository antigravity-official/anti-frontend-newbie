import React from "react";
import useGetEurInfo from "./hooks/useGetEurInfo";
import Exchange from "../exchange/Exchange";
import Loader from "../../components/loader";
import ErrorPage from "../../components/errorPage";
import styled from "styled-components";

const Currency = () => {
  const { data, isLoading, isError } = useGetEurInfo();

  if (isLoading) {
    <Loader />;
  }

  return (
    <div>
      {isError && <ErrorPage />}
      {!isLoading && data && (
        <div>
          <Title>환율기준 (1 유로)</Title>
          <ContentContainer>
            {data.basePrice} {data.basePrice - data.openingPrice > 0 && "▲"}
            {data.basePrice - data.openingPrice < 0 && "▼"}
            {data.changePrice}원 ({(data.changePrice / data.basePrice) * 100}%)
          </ContentContainer>
          <PriceContainer>
            <PriceList>살때 : {data.cashBuyingPrice}</PriceList>
            <PriceList>팔때 : {data.cashSellingPrice}</PriceList>
            <PriceList>보낼때 : {data.ttSellingPrice}</PriceList>
            <PriceList>받을때 : {data.ttBuyingPrice}</PriceList>
          </PriceContainer>
          <hr />
          <Exchange basePrice={data.basePrice} />
        </div>
      )}
    </div>
  );
};

export default Currency;

const Title = styled.h1``;
const ContentContainer = styled.div``;
const PriceContainer = styled.ul``;
const PriceList = styled.li``;
