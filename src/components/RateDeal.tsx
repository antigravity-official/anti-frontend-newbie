import React from "react";
import { priceInformation } from "../App";

export const RateDeal = ({ eurInfo }: { eurInfo: priceInformation }) => {
  return (
    <div>
      <div>살때 : {eurInfo ? eurInfo.cashBuyingPrice : ""}</div>
      <div>팔때 : {eurInfo ? eurInfo.cashSellingPrice : ""}</div>
      <div>보낼때 : {eurInfo ? eurInfo.ttSellingPrice : ""}</div>
      <div>받을때 : {eurInfo ? eurInfo.ttBuyingPrice : ""}</div>
    </div>
  );
};
