import { ExchangeRateInfo } from "../model/ExchangeRateInfo";

interface ExchangerProps {
  result: number;
  exchangeToKrw: (inputPrice: number, exchageRateInfo: ExchangeRateInfo) => void;
  exchageRateInfo: ExchangeRateInfo;
}

const Exchanger = ({ result, exchangeToKrw, exchageRateInfo }: ExchangerProps) => {
  return (
    <div className="exchanger__container">
      <input
        className="exchanger__input"
        type="number"
        onChange={(e) => exchangeToKrw(Number(e.target.value), exchageRateInfo)}
      />
      <span className="exchanger-span">유로 ▶︎</span>
      <input className="exchanger__input" disabled value={result} />
      <span className="exchanger-span">원</span>
    </div>
  );
};

export default Exchanger;
