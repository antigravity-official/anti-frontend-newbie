import { useState } from 'react';
import ExchangeRateData from '../types/type';

const useExchangeAtoB = () => {
  const [price, setPrice] = useState('');

  const exchangeAtoB = (data: ExchangeRateData, value: string) => {
    const exchange = Number(value) * data.basePrice;
    const result = exchange.toLocaleString(undefined, { maximumFractionDigits: 0 })
    setPrice(result);
  };

  return { price, exchangeAtoB };
};

export default useExchangeAtoB;
