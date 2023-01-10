import { useState, useEffect } from "react";
import { EurInfo } from "../types/EurInfo";

const initial = {
  basePrice: 0,
  openingPrice: 0,
  changePrice: 0,
  upDownIcon: 0,
  changeRate: 0,
  cashBuyingPrice: 0,
  cashSellingPrice: 0,
  ttSellingPrice: 0,
  ttBuyingPrice: 0,
};

const useFetchData = () => {
  const [eurData, setEurData] = useState<EurInfo>(initial);
  const [isLoading, setIsLoading] = useState(true);

  const getEurData = async () => {
    const response = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    );
    const result = await response.json();
    const data = result[0];

    setEurData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getEurData();
  }, []);

  return { eurData, isLoading };
};

export default useFetchData;
