import React, { ChangeEvent, useState } from 'react';
import { checkEuro } from '../common/validation/CheckEuro';
import { exchangeEurToKrw } from '../common/utils';

const useEurKrw = (euroPrice: number) => {
  const [eur, setEur] = useState<string>('');
  const [krw, setKrw] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!checkEuro(e.target.value)) return;

    setEur(e.target.value);
    setKrw(exchangeEurToKrw(Number(e.target.value), euroPrice));
  };

  return { eur, krw, onChangeHandler };
};

export default useEurKrw;
