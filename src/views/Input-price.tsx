import "./Input-price.css";

const InputPrice = (props: {
  exchangeEuroToKrw: (krw: number) => void;
  inputedEuro: number;
  exchangedWon: number;
}) => {
  const { exchangeEuroToKrw, exchangedWon, inputedEuro } = props;

  const commaEuro = inputedEuro.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });

  const commaWon = exchangedWon.toLocaleString("ko-KR", {
    maximumFractionDigits: 0,
  });

  return (
    <div className="input-form">
      <div className="input-form__input-euro">
        <label> 환전할 금액(유로) </label>
        <input
          type={"number"}
          onChange={(e) => exchangeEuroToKrw(+e.target.value)}
        />
      </div>
      <div className="input-form__changed-won">
        <div className="input-form__changed-won-div">
          <p> 입력된 유로</p>
          <div>
            <input className="input" type={"text"} disabled value={commaEuro} />
            유로
          </div>
        </div>
        <div className="input-form__changed-won-div">
          <p>유로 ▶︎ 원 </p>
        </div>
        <div className="input-form__changed-won-div">
          <p> 환전된 금액</p>
          <div>
            <input className="input" type={"text"} disabled value={commaWon} />
            원
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputPrice;
