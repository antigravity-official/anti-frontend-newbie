import React from "react";
import styled from "styled-components";
import { PriceType } from "../types/types";
import PriceComponent from "./public/PriceComponent";

const PriceCaseComponent = ({
  cashBuyingPrice,
  cashSellingPrice,
  ttSellingPrice,
  ttBuyingPrice,
}: PriceType) => {
  return (
    <PriceComponent>
      <div>살때 : {cashBuyingPrice}</div>
      <div>팔때 : {cashSellingPrice}</div>
      <div>보낼때 : {ttSellingPrice}</div>
      <div>받을때 : {ttBuyingPrice}</div>
    </PriceComponent>
  );
};

export default PriceCaseComponent;

{
  /* <div>
<div>살때 : {data.cashBuyingPrice}</div>
<div>팔때 : {data.cashSellingPrice}</div>
<div>보낼때 : {data.ttSellingPrice}</div>
<div>받을때 : {data.ttBuyingPrice}</div>
</div> */
}
