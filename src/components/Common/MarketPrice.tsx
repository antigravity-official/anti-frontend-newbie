import { useContext } from "react";
import { Content } from "../Common/Content";
import { ExchangeData } from "../../models";
export const MarketPrice = () => {
  const { data } = useContext(ExchangeData);

  return (
    <>
      {" "}
      <Content>제공자 : {data?.provider}</Content>
      <Content>살때 : {data?.cashBuyingPrice}</Content>
      <Content>팔때 : {data?.cashSellingPrice}</Content>
      <Content>보낼때 : {data?.ttSellingPrice}</Content>
      <Content>받을때 : {data?.ttBuyingPrice}</Content>
    </>
  );
};
