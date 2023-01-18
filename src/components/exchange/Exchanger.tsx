interface ExchangerProps {
  country: { korName: string; enName: string };
  input: string;
  result: string;
  exchangeToKrw: (inputPrice: string, basePrice: number) => void;
  basePrice: number;
}

const Exchanger = ({ country, input, result, exchangeToKrw, basePrice }: ExchangerProps) => {
  return (
    <div className="exchanger__container">
      <div className="exchanger-input__container">
        <input
          className="exchanger__input"
          type="text"
          value={input}
          onChange={(e) => exchangeToKrw(e.target.value, basePrice)}
        />
        <span className="exchanger-span">{country.korName}</span>
      </div>
      <div className="exchanger-icon">▼</div>
      <div className="exchanger-input__container">
        <input className="exchanger__input" disabled value={result} />
        <span className="exchanger-span">원</span>
      </div>
    </div>
  );
};

export default Exchanger;
