import React, { useState } from 'react';
import { EurInfo } from '../type';

const Exchange = ({ eurInfo }: { eurInfo: EurInfo | undefined }) => {
  const [krwInfo, setKrwInfo] = useState<Number>();
  const exchangeEurToKrw = (krw: number) => {
    eurInfo !== undefined ? setKrwInfo(krw * eurInfo.basePrice) : setKrwInfo(0);
  };
  return (
    <div className='Exchange'>
      <input
        type='number'
        onChange={(e) => {
          if (/^[0-9]*\.?[0-9]{0,2}$/.test(e.target.value)) {
            exchangeEurToKrw(parseFloat(e.target.value));
          } else {
            window.alert('소수점 두자리 이하로 작성하세요.');
            e.target.value = '0';
            exchangeEurToKrw(parseFloat(e.target.value));
          }
        }}
      />{' '}
      유로 ▶︎{' '}
      <input
        disabled
        placeholder={
          krwInfo !== undefined
            ? parseInt(krwInfo.toFixed(0)).toLocaleString().toString()
            : ''
        }
      />{' '}
      원
    </div>
  );
};

export default Exchange;
