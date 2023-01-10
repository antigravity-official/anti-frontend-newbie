import { ChangeEvent, useState } from 'react';
import { EurInfoTypes } from '../types/eur-info.type';
import { exchangeEurToKrw } from '../utils/exchange-eur-to-krw';

const regexp = /^\d*.?\d{0,2}$/;

const useInput = (eurInfo: EurInfoTypes) => {
  const [eur, setEur] = useState<string>('');
  const [krw, setKrw] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!regexp.test(e.target.value)) return;

    setEur(e.target.value);
    setKrw(exchangeEurToKrw(+e.target.value, eurInfo.basePrice));
  };

  return { eur, krw, changeHandler };
};

export default useInput;
