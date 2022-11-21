import React, { useEffect, useState } from "react";
import getEurInfo from "../api";
import { EurInfoType } from "../../types";

export default function useHandleStates() {
  const [isReady, setReady] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<EurInfoType | undefined>();
  const [exchangePrice, setExchangePrice] = useState<number>(0);

  const exchangeEurToKrw = (krw: number) => {
    if (eurInfo) {
      setExchangePrice(krw * eurInfo.basePrice);
    } else return;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^[\d]*\.?[\d]{0,2}$/.test(value)) {
      exchangeEurToKrw(Number(value));
    } else return;
  };

  useEffect(() => {
    getEurInfo().then((res) => {
      setReady(true);
      setEurInfo(res);
    });
    return () => {};
  }, []);

  return { isReady, eurInfo, onChange, exchangePrice };
}
