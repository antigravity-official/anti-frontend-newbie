import { useState } from "react";

const ViewModel = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});

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
