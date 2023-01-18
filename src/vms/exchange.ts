import { useState } from "react";
import { getEurInfo } from "../models";
import { IEurInfo } from "../types";

const ExchangeViewModel = () => {
  const [eur, setEur] = useState<string>("0");
  const [eurInfo, setEurInfo] = useState<IEurInfo>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });

  const updateEurInfo = async () => {
    setEurInfo(await getEurInfo());
  };
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const WITH_DECIMAL_POINT = /^\d*.?\d{0,2}$/;
    const WITH_ZERO = /^0+/;

    const { value } = e.target;
    
    if (!value) {
      setEur("0");

      return;
    }

    if (!WITH_DECIMAL_POINT.test(value)) {
      return;
    }

    setEur(value.replace(WITH_ZERO, ""));
  };

  const exchangeToKrw = (eur: string): string => {
    return Math.round(Number(eur) * eurInfo.basePrice)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  };

  return {
    eur,
    krw: exchangeToKrw(eur),
    handleOnChange,
    updateEurInfo,
  };
};

export default ExchangeViewModel;
