import React, { useEffect, useState } from 'react';
import { getEurInfo } from './apis';
import { EruInfo } from './types/eruInfo';

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EruInfo | undefined>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });
  const [krw, setKrw] = useState(0);
  const [eur, setEur] = useState<string>();

  const exchangeEurToKrw = (krw: number) =>
    Math.floor(krw * eurInfo!.basePrice);

  useEffect(() => {
    const getData = async () => {
      const response = await getEurInfo();
      setEurInfo(response[0]);
    };
    getData();
    setReady(true);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let regexp = /^\d*.?\d{0,2}$/;
    if (!regexp.test(e.target.value)) {
      return;
    } else {
      setEur(e.target.value);
    }
    setKrw(exchangeEurToKrw(Number(e.target.value)));
  };

  if (!isReady) return null;
  return (
    <div className='App'>
      {eurInfo && (
        <>
          <div>환율기준 (1 유로)</div>
          <div>
            {eurInfo.basePrice}
            {eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
            {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
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
          <input onChange={handleChange} value={eur || ''} /> 유로 ▶︎{' '}
          <input
            value={krw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            disabled
          />
        </>
      )}
    </div>
  );
};

export default App;
