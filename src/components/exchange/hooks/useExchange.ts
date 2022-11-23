import React, { useState, useEffect } from 'react';
import { exchangeEurToKrw } from '../utils';

const useExchange = (basePrice: number) => {
  const [eur, setEur] = useState<number>(0);
  const [krw, setKrw] = useState<number>(0);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEur(Number(event.target.value));

  useEffect(() => {
    const exchangedKrw = exchangeEurToKrw(eur, basePrice);
    setKrw(exchangedKrw);
  }, [basePrice, eur]);

  return { eur, krw, onChange };
};

export default useExchange;
