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
    /*  e.target.value = Number(
      e.target.value.replace(/[^0-9]/g, '')
    ).toLocaleString(); */
    let inputValue = e.target.value.split('.');
    console.log(inputValue);
    const eurValue = [];
    if (inputValue.length === 2) {
      if (inputValue[1].length >= 2) {
        eurValue.push(`${inputValue[0]}.${inputValue[1].slice(0, 2)}`);
      }
    }
    setEurInputValue(
      eurValue.length === 1 ? eurValue.join('') : e.target.value
    );
  };

  const krwInput = () => {
    return Math.trunc(exchangeEurToKrw(eurInputValue)).toLocaleString();
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
      <input value={eurInputValue} onChange={onChangeEurInput} /> 유로 ▶︎{' '}
      <input value={krwInput()} disabled /> 원
    </div>
  );
};

export default App;
