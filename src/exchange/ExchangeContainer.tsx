import { useEffect, useState } from "react";
import useExchangeRate from "../hooks/useExchangeRate";
import ExchangeRate from "./ExchangeRate";

export const ExchangeContainer = () => {
  const [country, setCountry] = useState({
    korName: "유로",
    enName: "EUR",
  });
  const { isReady, exchageRateInfo, loadExchangeRateInfo } = useExchangeRate();

  useEffect(() => {
    loadExchangeRateInfo(country.enName);
  }, [country]);

  return <ExchangeRate country={country} exchangeRateInfo={exchageRateInfo} />;
};
