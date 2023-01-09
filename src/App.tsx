import React, { ChangeEvent, useEffect, useState } from 'react';

interface EuroInfo {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EuroInfo | undefined>();
  const [inputEuro, setInputEuro] = useState('');

  const getEurInfo = async () => {
    const krweur = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (krw: string) => {
    if (!!!inputEuro) return '';
    if (!!eurInfo) {
      return Math.floor(Number(krw) * eurInfo.basePrice);
    }
  };

  const addComma = (money: number | string | undefined) => {
    if (money === '' || typeof money === 'undefined') return '';
    return money?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const transferInt = (float: number) => {
    return Math.floor(float);
  };

  const handleWriteEuro = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.includes('.')) {
      value = value.split('.')[0] + '.' + value.split('.')[1].slice(0, 2);
    }
    setInputEuro(value);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (!isReady) return null;
  return (
    <div className='App'>
      <div>환율기준 (1 유로)</div>
      {!!eurInfo && (
        <>
          <div>
            {addComma(transferInt(eurInfo.basePrice))}
            {eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
            {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
            {addComma(eurInfo.changePrice)}원 (
            {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
          </div>
          <div>
            <div>살때 : {addComma(transferInt(eurInfo.cashBuyingPrice))}</div>
            <div>팔때 : {addComma(transferInt(eurInfo.cashSellingPrice))}</div>
            <div>보낼때 : {addComma(transferInt(eurInfo.ttSellingPrice))}</div>
            <div>받을때 : {addComma(transferInt(eurInfo.ttBuyingPrice))}</div>
          </div>
        </>
      )}
      <hr />
      <input value={inputEuro} onChange={handleWriteEuro} /> 유로 ▶︎&nbsp;
      <input disabled value={addComma(exchangeEurToKrw(inputEuro))} /> 원
    </div>
  );
};

export default App;
