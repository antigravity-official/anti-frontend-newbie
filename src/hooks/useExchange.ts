import { useState } from "react";

import { useCalMoney } from "./useCalMoney";

export const useExchange = (basePrice: number) => {
  const [exchange, setExchange] = useState<string>("1");
  const regexp = /^\d*.?\d{0,2}$/;

  const exchangeEurToKrw = (value: string) => {
    if (!regexp.test(value)) {
      return alert("소수점 두 자리까지 가능합니다.");
    }
    setExchange(value);
  };

  const Krw = useCalMoney(exchange, basePrice);

  return { Krw, exchangeEurToKrw, exchange };
};
