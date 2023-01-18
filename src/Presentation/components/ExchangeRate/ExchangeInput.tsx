import { ExchangeInfo } from "../../../../typing";
import useViewModel from "../../Views/ExchangeRate/ViewModel";

interface Props {
  exchangeInfo: ExchangeInfo;
  exchangeEurToKrw: (inputMoney: string, basePrice: number) => string;
}

const ExchangeInput = ({ exchangeInfo, exchangeEurToKrw }: Props) => {
  const basePrice = exchangeInfo.basePrice;
  const { money, onChange, inputError } = useViewModel();
  return (
    <>
      <div>
        <input type="text" value={money} onChange={onChange} />
        {exchangeInfo.currencyName} ▶︎{" "}
        <input value={exchangeEurToKrw(money, basePrice)} disabled /> 원
      </div>
      {inputError && <div style={{ color: "orange" }}>{inputError}</div>}
    </>
  );
};

export default ExchangeInput;
