import React from 'react';
import { useExchangeAtoB } from '../hooks';
import ExchangeRateData from '../types/type';

function ExchangeCalculator(rawData: ExchangeRateData) {
  const { price, exchangeAtoB } = useExchangeAtoB(); 

  const exchangeEurToKrw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    exchangeAtoB(rawData, value);
  };

  return (
    <div className='h-1/4'>
      <div className='h-1/3 border rounded-xl mt-3 overflow-hidden'>
        <input
          className='w-3/5 h-full outline-0 px-3'
          onChange={(e) => exchangeEurToKrw(e)}
        />
        <span className='w-2/5 border-l-2 pl-4 cursor-default'>
          {rawData.currencyName}
        </span>
      </div>
      <div className='h-1/3 border rounded-xl mt-3 overflow-hidden'>
        <input
          className='w-3/5 h-full outline-0 px-3 bg-white'
          value={price}
          disabled
        />
        <span className='w-2/5 border-l-2 pl-4 cursor-default'>
          원
        </span>
      </div>
    </div>
  );
}

export default ExchangeCalculator;
