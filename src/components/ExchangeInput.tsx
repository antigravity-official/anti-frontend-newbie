import { ChangeEvent, useState } from 'react';
import { EurInfoTypes } from '../types/eur-info.type';
import { exchangeEurToKrw } from '../utils/exchange-eur-to-krw';

const regexp = /^\d*.?\d{0,2}$/;

const ExchangeInput = ({ eurInfo }: { eurInfo: EurInfoTypes }) => {
  const [eur, setEur] = useState<string>('');
  const [krw, setKrw] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!regexp.test(e.target.value)) return;

    setEur(e.target.value);
    setKrw(exchangeEurToKrw(+e.target.value, eurInfo));
  };

  return (
    <div>
      <input type="number" value={eur} onChange={changeHandler} /> 유로 ▶︎
      <input type="text" disabled value={krw || 0} />원
    </div>
  );
};

export default ExchangeInput;
