import { useState } from "react";
import { ExchangeInfoType } from "../type/exchange";

interface ExchangeCalcType {
  eurInfo: ExchangeInfoType | Record<string, never>;
}
export default function ExchangeCalc({ eurInfo }: ExchangeCalcType) {
  const [eurValue, setEurValue] = useState(0);
  const [krwValue, setKrwValue] = useState(0);

  const exchangeEurToKrw = (krw: number) => krw * eurInfo.basePrice;

  const handleChange = (e: any) => {
    setKrwValue(exchangeEurToKrw(e.target.value));
    setEurValue(e.target.value);
  };

  return (
    <div>
      <input type="number" value={eurValue} onChange={handleChange} /> 유로 ▶︎
      <input value={krwValue} disabled /> 원
    </div>
  );
}
