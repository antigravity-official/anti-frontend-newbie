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
  const { renderArrow, calcChangeRate, exchangeEurToKrw, getExchangeInfo } =
    useViewModel();

  const { isReady, exchangeInfo } = getExchangeInfo(currency);

  if (!isReady || exchangeInfo === null) {
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
        exchangeInfo={exchangeInfo}
        renderArrow={renderArrow}
        calcChangeRate={calcChangeRate}
      />
      <ExchangeRateInfo exchangeInfo={exchangeInfo} />
      <hr />
      <ExchangeInput
        exchangeInfo={exchangeInfo}
        exchangeEurToKrw={exchangeEurToKrw}
      />
    </>
  );
};

export default ExchangeRate;
