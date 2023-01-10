import { useState } from "react";
import { ExchangeInfoType } from "../type/exchange";

interface ExchangeCalcType {
  eurInfo: ExchangeInfoType | Record<string, never>;
}
export default function ExchangeCalc({ eurInfo }: ExchangeCalcType) {
  const [eurValue, setEurValue] = useState("");
  const [krwValue, setKrwValue] = useState("");

  const krwOption = { maximumFractionDigits: 0 };

  const exchangeEurToKrw = (krw: number) =>
    (krw * eurInfo.basePrice).toLocaleString("ko-KR", krwOption);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKrwValue(exchangeEurToKrw(+value));
    setEurValue(value);
  };

  return (
    <div>
      <input type="number" value={eurValue} onChange={handleChange} /> 유로 ▶︎
      <input value={krwValue} disabled /> 원
    </div>
  );
}
