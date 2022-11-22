import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ViewProps } from "../@types/ViewProps";
import { ExchangeEurState } from "../model/Atom";
import { getData } from "../model/Data";
import { ExchangeEurSelector } from "../model/Selector";

export const useExchangeViewModel = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<ViewProps>();
  const [eur, setEur] = useRecoilState(ExchangeEurState);

  const basePrice = eurInfo?.basePrice ?? 0;

  const Krw = useRecoilValue(ExchangeEurSelector(basePrice));

  const getEurInfo = async () => {
    const eurData = await getData();
    setEurInfo(eurData);
    setReady(true);
  };

  const exchangeEurToKrw = (e: React.ChangeEvent<HTMLInputElement>) => {
    let regexp = /^\d*.?\d{0,2}$/;
    if (regexp.test(e.currentTarget.value)) {
      setEur(e.currentTarget.value);
    } else {
      return false;
    }
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  return {
    isReady,
    eurInfo,
    eur,
    Krw,
    getEurInfo,
    exchangeEurToKrw,
  };
};
