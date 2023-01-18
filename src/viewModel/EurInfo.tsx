import React from "react";
import getEurInfo from "../model/eurInfo";
import CashTtInfoList from "./CashTtInfoList";
import CurrencyConverter from "./CurrencyConverter";
import EurStandardInfo from "./EurStandardInfo";

const getEurData = getEurInfo();

const EurInfo = () => {
  const eurInfo = getEurData.read();
  return (
    <div>
      <EurStandardInfo
        basePrice={eurInfo.basePrice}
        changePrice={eurInfo.changePrice}
        openingPrice={eurInfo.openingPrice}
      />
      <CashTtInfoList eurInfo={eurInfo} />
      <CurrencyConverter basePrice={eurInfo.basePrice} />
    </div>
  );
};

export default EurInfo;
