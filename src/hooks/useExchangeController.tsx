import { useEffect, useState } from "react";
import { EurInfo } from "../model/eurInfo";

const useExchangeController = () => {
  const [eurInfo, setEurInfo] = useState<EurInfo>();

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);
    console.log("krweur", krweur);
    setEurInfo(krweur);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  return { eurInfo };
};
export default useExchangeController;
