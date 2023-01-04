import { useRef } from "react";
import {
  CurrencyCode,
  TextCurrencyFormatModel,
  InputCurrencyFormatModel,
} from "../../../model/currency";
import { ExchangeInfoModel } from "../../../model/exchange";
import {
  MemoryCurrencyFormatRepository,
  useCurrencyFormatViewModel,
} from "../../../viewmodel/currency";
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
  const { current: exchangeViewModel } = useRef(
    new ExchangeInfoModel(new HTTPExchangeInfoRepository())
  );

  const { current: currencyFormatRepository } = useRef(
    new MemoryCurrencyFormatRepository()
  );

  const { current: inputCurrencyFormatModel } = useRef(
    new InputCurrencyFormatModel(currencyFormatRepository)
  );
  const { current: textCurrencyFormatModel } = useRef(
    new TextCurrencyFormatModel(currencyFormatRepository)
  );

  const { formatter: fromCurrencyFormatter, format: fromCurrencyFormat } =
    useCurrencyFormatViewModel(inputCurrencyFormatModel, fromCurrencyCode);

  const { formatter: toCurrencyFormatter, format: toCurrencyFormat } =
    useCurrencyFormatViewModel(textCurrencyFormatModel, toCurrencyCode);

  const { exchangeInfo } = useExchangeViewModel(
    exchangeViewModel,
    fromCurrencyCode,
    toCurrencyCode
  );

  if (!exchangeInfo) return <LoadingMessage message="환율 정보 로딩 중" />;

  return (
    <>
      <ExchangeInfoBox
        exchangeInfo={exchangeInfo}
        fromCurrencyFormat={fromCurrencyFormat}
        toCurrencyFormat={toCurrencyFormat}
        fromCurrencyFormatter={fromCurrencyFormatter}
        toCurrencyFormatter={toCurrencyFormatter}
        exchange={exchangeViewModel.exchange}
      />
    </>
  );
};

export default ExchangeInfoPage;
