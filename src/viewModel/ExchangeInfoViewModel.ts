import { useEffect, useState } from "react";
import KrewurModel from "../model/KrewurModel";
import { tExchangInfoData } from "../_types/exchangeInfo";

function ExchangeInfoViewModel() {
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

  useEffect(() => {
    setExchange();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getEurInfo]);

  return [eurInfo];
}

export default ExchangeInfoViewModel;
