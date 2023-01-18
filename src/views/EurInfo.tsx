import React, { useEffect } from "react";
import { EurInfoViewModel } from "../vms";

const EurInfoView = ()  => {
  const { eurInfo, updateEurInfo } = EurInfoViewModel();

  useEffect(() => {
    updateEurInfo();
  }, []);

  return (
    <>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
    </>
  );
};

export default EurInfoView;
