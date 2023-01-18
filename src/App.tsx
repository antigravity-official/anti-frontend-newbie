import React, { useEffect, useState } from "react";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});
  const [result, setResult] = useState<number>(0);
  const [stopInput, setStopInput] = useState<boolean>(false);

  const getEurInfo = async () => {
    const krweur = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR")
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (e: any) => {
    setResult(e.currentTarget.value * eurInfo.basePrice);
    if (e.currentTarget.value.includes(".")) {
      if (e.currentTarget.value.split(".")[1].length > 2) {
        setStopInput(true);
        setTimeout(() => {
          setStopInput(false);
        }, 2000);
      }
    }
  };

  const eurToKrw: string = Math.floor(result)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (!isReady) return null;
  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 ({(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      <input onChange={exchangeEurToKrw} disabled={stopInput} /> 유로 ▶︎ <input disabled value={eurToKrw} /> 원
      {stopInput && <div>유로화는 소수점 2자리까지만 입력이 가능합니다.</div>}
    </div>
  );
};

export default App;
