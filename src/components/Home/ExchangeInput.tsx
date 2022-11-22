import { HomePageExchangeInputProps } from "../../@types/ViewModelProps";

const ExchangeInput = (props: HomePageExchangeInputProps) => {
  const { exchangeEurToKrw, eur, Krw } = props;
  return (
    <section>
      <input type="text" onChange={exchangeEurToKrw} value={eur} />
      유로 ▶︎ <input disabled value={Krw} /> 원
    </section>
  );
};

export default ExchangeInput;
