import { useState } from "react";
import { EuroInfoType } from "./types/EuroInfoType";

const ViewModel = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EuroInfoType>(InitialData);

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);

    setTimeout(() => {
      setReady(true);
    }, 1000);
  };

  return { isReady, eurInfo, getEurInfo };
};

export default ViewModel;

const InitialData = {
  basePrice: 0,
  openingPrice: 0,
  changePrice: 0,
  cashBuyingPrice: 0,
  cashSellingPrice: 0,
  ttSellingPrice: 0,
  ttBuyingPrice: 0,
};
