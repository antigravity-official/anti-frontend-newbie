import { useEffect, useState } from "react";
import useExchanger from "../../hooks/useExchanger";
import useExchangeRate from "../../hooks/useExchangeRate";
import Exchanger from "./Exchanger";
import ExchangeRate from "./ExchangeRate";

export const ExchangeContainer = () => {
  const [country, setCountry] = useState({
    korName: "유로",
    enName: "EUR",
  });
  const { isReady, exchageRateInfo, loadExchangeRateInfo } = useExchangeRate();
  const { result, exchangeToKrw } = useExchanger();

  useEffect(() => {
    loadExchangeRateInfo(country.enName);
  }, [country]);

  return (
    <>
      <ExchangeRate country={country} exchangeRateInfo={exchageRateInfo} />
      <Exchanger
        country={country}
        result={result}
        exchangeToKrw={exchangeToKrw}
        basePrice={exchageRateInfo.basePrice}
      />
    </>
  );
};
