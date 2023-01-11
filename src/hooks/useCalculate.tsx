import { useState } from 'react';
import { currencyInfoTypes } from '../types/currencyInfo.type';
import { exchangeEurToKrw } from '../utils/Exchange';
import { fromCurrencyRegTest } from '../utils/reg';

const useCalculate = (currencyInfo: currencyInfoTypes) => {
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');

  const handleCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (fromCurrencyRegTest(value)) {
      setFromCurrency(value);
      setToCurrency(exchangeEurToKrw(value, currencyInfo.basePrice));
    }
  };

  return { fromCurrency, toCurrency, handleCurrency };
};

export default useCalculate;
