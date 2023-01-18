import React, { useEffect, useState } from "react";

interface IeurInfo {
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
  const [eurInfo, setEurInfo] = useState<IeurInfo>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });
  const [eur, setEur] = useState<string>("0");

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const handleOnChangeEur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const WITH_DECIMAL_POINT = /^\d*.?\d{0,2}$/;
    const WITH_ZERO = /^0+/;

    const { value } = e.target;
    
    if (!value) {
      setEur("0");

      return;
    }

    if (!WITH_DECIMAL_POINT.test(value)) {
      return;
    }

    setEur(value.replace(WITH_ZERO, ""));
  };

  const exchangeEurToKrw = (eur: string): string => (
    Math.round(Number(eur) * eurInfo.basePrice)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  );

  useEffect(() => {
    getEurInfo();
  }, []);

  if (!isReady) return null;

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
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
      <input type="number" step="0.01" value={eur} onChange={handleOnChangeEur} /> 유로 ▶︎ <input disabled value={exchangeEurToKrw(eur)} /> 원
    </div>
  );
};

export default App;
