import { useState } from "react";
import { ExchangeInfoType } from "../type/exchange";
import { currency, exchangeEurToKrw } from "../utils/currency";

interface ExchangeCalcType {
  eurInfo: ExchangeInfoType | Record<string, never>;
}
export default function ExchangeCalc({ eurInfo }: ExchangeCalcType) {
  const [eurValue, setEurValue] = useState("");
  const [krwValue, setKrwValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKrwValue(
      currency(exchangeEurToKrw(+value, eurInfo.basePrice), "ko-KR", 0)
    );
    setEurValue(value);
  };

  return (
    <div>
      <input type="number" value={eurValue} onChange={handleChange} /> 유로 ▶︎
      <input value={krwValue} disabled /> 원
    </div>
  );
}
