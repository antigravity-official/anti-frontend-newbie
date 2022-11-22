import { useContext } from "react";
import { Content } from "../Common/Content";
import { ExchangeData } from "../../VM";
export const MarketPrice = (prop: any) => {
  const data = prop.data;

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
