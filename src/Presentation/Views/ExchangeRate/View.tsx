import ExchangeRateTitle from "../../components/ExchangeRate/ExchangeRateTitle";
import ExchangeRateInfo from "../../components/ExchangeRate/ExchangeRateInfo";
import ExchangeInput from "../../components/ExchangeRate/ExchangeInput";
import { Currency } from "../../../../typing";
import { SyncLoader } from "react-spinners";
import useViewModel from "./ViewModel";
interface Props {
  currency: Currency;
}

const ExchangeRate = ({ currency }: Props) => {
  const {
    isReady,
    arrow,
    currencyName,
    formattingBasePrice,
    formattingChangePrice,
    changeRate,
    formattingCashBuyingPrice,
    formattingSellingPrice,
    formattingTtSellingPrice,
    formattingTtBuyingPrice,
    money,
    onChange,
    exchangedMoney,
    inputError,
  } = useViewModel(currency);

  if (!isReady) {
    return (
      <>
        <SyncLoader color="#36d7b7" />
        <div>환율 정보를 로딩중입니다.</div>
      </>
    );
  }

  return (
    <>
      <ExchangeRateTitle
        arrow={arrow}
        currencyName={currencyName}
        formattingBasePrice={formattingBasePrice}
        formattingChangePrice={formattingChangePrice}
        changeRate={changeRate}
      />
      <ExchangeRateInfo
        formattingCashBuyingPrice={formattingCashBuyingPrice}
        formattingSellingPrice={formattingSellingPrice}
        formattingTtBuyingPrice={formattingTtBuyingPrice}
        formattingTtSellingPrice={formattingTtSellingPrice}
      />
      <hr />
      <ExchangeInput
        money={money}
        onChange={onChange}
        exchangedMoney={exchangedMoney}
        currencyName={currencyName}
        inputError={inputError}
      />
    </>
  );
};

export default ExchangeRate;
