import { useState } from "react";
import { getEurInfo } from "../models";
import { IEurInfo } from "../types";

const EurInfoViewModel = () => {
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

  return {
    eurInfo,
    updateEurInfo
  };
};

export default EurInfoViewModel;
