import { useEffect, useState } from "react";
import { ExchangeRateInfoModel } from "../model/ExchangeRateInfoModel";
import { EuroInfo } from "../types/type";

export const ExchangeRateInfoViewModel = (model: ExchangeRateInfoModel) => {
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
    // setTimeout(() => {
    model.getKrwEurData().then((krweur) =>
      setEurInfo({
        basePrice: krweur.basePrice,
        openingPrice: krweur.openingPrice,
        changePrice: krweur.changePrice,
        cashBuyingPrice: krweur.cashBuyingPrice,
        cashSellingPrice: krweur.cashSellingPrice,
        ttSellingPrice: krweur.ttSellingPrice,
        ttBuyingPrice: krweur.ttBuyingPrice,
      })
    );
    // }, 3000);
    return () => {};
  }, [model]);

  const exchangeEurToKrw = (krw: number): number => {
    return krw * eurInfo.basePrice;
  };

  return { eurInfo, exchangeEurToKrw };
};
