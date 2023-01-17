import { useEffect, useState } from "react";
import EurInfoModel from "../model/EurInfoModel";
import { EruInfoType } from "../types/EurInfoType";

const EurInfoViewModel = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EruInfoType>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });

  const getEurInfo = async () => {
    setEurInfo(await EurInfoModel());

    setTimeout(() => {
      setReady(true);
    }, 1000);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  return { isReady, eurInfo };
};

export default EurInfoViewModel;
