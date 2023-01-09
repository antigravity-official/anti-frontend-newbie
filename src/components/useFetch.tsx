import React, { useEffect, useState } from "react";
import { priceInformation } from "../App";

export const useFetch = () => {
  const [isReady, setReady] = useState(false); // 비동기 통신
  const [eurInfo, setEurInfo] = useState<priceInformation>(); // get요청 값 가져오는값

  const getEurInfo = async () => {
    // get요청 async요청
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };
  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  return { eurInfo, isReady };
};
