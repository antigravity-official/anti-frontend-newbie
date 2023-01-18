interface ExchangerProps {
  country: { korName: string; enName: string };
  result: number;
  exchangeToKrw: (inputPrice: number, basePrice: number) => void;
  basePrice: number;
}

const Exchanger = ({ country, result, exchangeToKrw, basePrice }: ExchangerProps) => {
  return (
    <div className="exchanger__container">
      <input
        className="exchanger__input"
        type="number"
        onChange={(e) => exchangeToKrw(Number(e.target.value), basePrice)}
      />
      <span className="exchanger-span">{country.korName} ▶︎</span>
      <input className="exchanger__input" disabled value={result} />
      <span className="exchanger-span">원</span>
    </div>
  );
};

export default Exchanger;
