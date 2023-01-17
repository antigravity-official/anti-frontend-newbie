import React, { useEffect, useState } from 'react';

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});
  const [eurInputValue, setEurInputValue] = useState('0');

  const getEurInfo = async () => {
    const krweur = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  const onChangeEurInput = (e: any) => {
    setEurInputValue(e.target.value);
    e.target.value = Number(
      e.target.value.replace(/[^0-9]/g, '')
    ).toLocaleString();
  };

  const commaEveryThreeDigits = (num: number) => {
    return num.toLocaleString();
  };

  const krwInput = () => {
    const krw = exchangeEurToKrw(eurInputValue.split(',').join(''));
    return commaEveryThreeDigits(krw);
  };

  if (!isReady) return null;
  return (
    <div className="App">
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
      <input onChange={onChangeEurInput} /> 유로 ▶︎{' '}
      <input value={krwInput()} disabled /> 원
    </div>
  );
};

export default App;
