import { useState, useEffect } from "react";
import { getInfo } from "../api/exchangeInfo";

export default function ExchangeInfo() {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});

  const getEurInfo = async () => {
    const krweur = await getInfo();
    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

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
        {eurInfo.changePrice}원 ( //{" "}
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>

      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
    </div>
  );
}
