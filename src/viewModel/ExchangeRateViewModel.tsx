import { useState, useEffect } from "react";
import { EuroInfoModel } from "../model/EuroInfoModel";
import { EuroInfo } from "../types/types";

export const ExchangeRateViewModel = () => {
  const [eurInfo, setEurInfo] = useState<EuroInfo>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });

  useEffect(() => {
    EuroInfoModel.getEuroInfo().then((getData) => {
      setEurInfo({ ...getData });
    });
  }, []);

  const exchangeEuroToKrw = (krw: number) => {
    return Math.floor(krw * eurInfo.basePrice);
  };
  return { eurInfo, exchangeEuroToKrw };
};
