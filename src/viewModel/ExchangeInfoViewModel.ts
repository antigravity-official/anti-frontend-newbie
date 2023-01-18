import { useEffect, useState } from "react";
import KrewurModel from "../model/KrewurModel";
import useInterval from "../_hooks/useInterval";
import { tExchangInfoData } from "../_types/exchangeInfo";

function ExchangeInfoViewModel() {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<tExchangInfoData>({
    basePrice: 1,
    cashBuyingPrice: 1,
    cashSellingPrice: 1,
    changePrice: 1,
    openingPrice: 1,
    ttBuyingPrice: 1,
    ttSellingPrice: 1,
  });

  const { getEurInfo } = KrewurModel();

  useInterval(() => {
    const setExchange = async () => {
      const data = await getEurInfo();
      if (data) {
        setEurInfo({
          basePrice: data.basePrice,
          cashBuyingPrice: data.cashBuyingPrice,
          cashSellingPrice: data.cashSellingPrice,
          changePrice: data.changePrice,
          openingPrice: data.openingPrice,
          ttBuyingPrice: data.ttBuyingPrice,
          ttSellingPrice: data.ttSellingPrice,
        });
      }
    };
    setExchange();
  }, 1000);

  useEffect(() => {
    let buffer = setTimeout(() => setReady(true), 1000);
    return () => {
      clearTimeout(buffer);
      setReady(false);
    };
  }, [eurInfo.basePrice]);

  return { eurInfo, isReady };
}

export default ExchangeInfoViewModel;
