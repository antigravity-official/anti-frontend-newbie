import React, { useEffect, useState, useCallback } from 'react';
import { EurInfo } from './types/eur';
import { getEurInfo } from './api/eurInfoApi';

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<EurInfo | null>(null);

  const fetchEurInfo = useCallback(async () => {
    setIsLoading(true);
    try {
      const krweur: EurInfo = await getEurInfo();
      setEurInfo(krweur);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  const exchangeEurToKrw = (krw: any) => {
    if (!eurInfo) return;
    return krw * eurInfo.basePrice;
  };

  useEffect(() => {
    fetchEurInfo();
  }, [fetchEurInfo]);

  if (isLoading) return <p>Loading...</p>;

  if (isError || !eurInfo) return <p>Error</p>;

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 ? '▲' : '▼'}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원
    </div>
  );
};

export default App;
