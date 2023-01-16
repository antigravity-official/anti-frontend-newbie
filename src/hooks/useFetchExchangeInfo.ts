import { useEffect, useState } from "react";
import { Currency, ExchangeInfo } from "../../typing";
import fetchExchangeInfo from "../api";

const useFetchExchangeInfo = (currency: Currency) => {
  const [isReady, setReady] = useState(false);
  const [exchangeInfo, setExchangeInfo] = useState<ExchangeInfo | null>(null);

  const getEurInfo = async () => {
    const info = await fetchExchangeInfo(currency);
    console.log(info);
    setExchangeInfo(info);
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
  }, []);

  return { isReady, exchangeInfo };
};

export default useFetchExchangeInfo;
