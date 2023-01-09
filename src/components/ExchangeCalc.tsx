import { ExchangeInfoType } from "../type/exchange";

interface ExchangeCalcType {
  eurInfo: ExchangeInfoType | Record<string, never>;
}
export default function ExchangeCalc({ eurInfo }: ExchangeCalcType) {
  // const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  return (
    <div>
      <input /> 유로 ▶︎ <input disabled /> 원
    </div>
  );
}
