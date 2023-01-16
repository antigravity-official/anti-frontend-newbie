import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import fetcher from 'lib/queryClient';
import { QueryKeys } from './lib/queryClient';

export const App = () => {
  const { data, isLoading } = useQuery(QueryKeys.EurInfo, () => fetcher({ method: 'GET', path: '' }));
  console.log(data);

  const exchangeEurToKrw = (krw: any) => krw * data.basePrice;

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {data.basePrice}
        {data.basePrice - data.openingPrice > 0 && '▲'}
        {data.basePrice - data.openingPrice < 0 && '▼'}
        {data.changePrice}원 ({(data.changePrice / data.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {data.cashBuyingPrice}</div>
        <div>팔때 : {data.cashSellingPrice}</div>
        <div>보낼때 : {data.ttSellingPrice}</div>
        <div>받을때 : {data.ttBuyingPrice}</div>
      </div>
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원
    </div>
  );
};

export default App;
