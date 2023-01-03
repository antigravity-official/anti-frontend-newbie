import { useRef } from "react";
import { CurrencyCode, CURRENCY_FORMAT } from "../../../model/currency";
import { ExchangeInfoModel } from "../../../model/exchange";
import {
  HTTPExchangeInfoRepository,
  useExchangeViewModel,
} from "../../../viewmodel/exchange";
import LoadingMessage from "../../atom/LoadingMessage";
import ExchangeInfoBox from "../../organism/ExchangeInfoBox";

interface Props {
  fromCurrencyCode: CurrencyCode;
  toCurrencyCode: CurrencyCode;
}

const ExchangeInfoPage = ({ fromCurrencyCode, toCurrencyCode }: Props) => {
  const { current: model } = useRef(
    new ExchangeInfoModel(new HTTPExchangeInfoRepository())
  );

  const { exchangeInfo } = useExchangeViewModel(
    model,
    fromCurrencyCode,
    toCurrencyCode
  );

  if (!exchangeInfo) return <LoadingMessage message="환율 정보 로딩 중" />;

  return (
    <>
      <ExchangeInfoBox
        exchangeInfo={exchangeInfo}
        fromCurrencyFormat={CURRENCY_FORMAT[fromCurrencyCode]}
        toCurrencyFormat={CURRENCY_FORMAT[toCurrencyCode]}
        exchange={model.exchange}
      />
    </>
  );
};

export default ExchangeInfoPage;
