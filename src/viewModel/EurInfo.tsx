import React from "react";
import getEurInfo from "../model/eurInfo";
import CashTtInfoList from "./CashTtInfoList";
import CurrencyConverter from "./CurrencyConverter";
import EurStandardInfo from "./EurStandardInfo";

const getEuroData = getEurInfo();

const EuroInfo = () => {
  const eurInfo = getEuroData.read();
  return (
    <div>
      <EurStandardInfo
        basePrice={eurInfo.basePrice}
        changePrice={eurInfo.changePrice}
        openingPrice={eurInfo.openingPrice}
      />
      <CashTtInfoList euroInfo={eurInfo} />
      <CurrencyConverter basePrice={eurInfo.basePrice} />
    </div>
  );
};

export default EuroInfo;
