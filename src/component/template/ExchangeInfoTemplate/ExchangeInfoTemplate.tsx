import { CurrencyFormat } from "../../../model/currency";
import { ExchangeInfo } from "../../../model/exchange";
import LoadingMessage from "../../atom/LoadingMessage";
import ExchangeInfoBox from "../../organism/ExchangeInfoBox";

interface Props {
  exchangeInfo: ExchangeInfo | undefined;
  fromCurrencyFormat: CurrencyFormat;
  toCurrencyFormat: CurrencyFormat;
  fromCurrencyFormatter: (amount: string) => string;
  toCurrencyFormatter: (amount: string) => string;
  exchange: (amount: number) => number;
}

const ExchangeInfoTemplate = ({
  exchangeInfo,
  fromCurrencyFormat,
  toCurrencyFormat,
  fromCurrencyFormatter,
  toCurrencyFormatter,
  exchange,
}: Props) => {
  if (!exchangeInfo) return <LoadingMessage message="환율 정보 로딩 중" />;

  return (
    <>
      <ExchangeInfoBox
        exchangeInfo={exchangeInfo}
        fromCurrencyFormat={fromCurrencyFormat}
        toCurrencyFormat={toCurrencyFormat}
        fromCurrencyFormatter={fromCurrencyFormatter}
        toCurrencyFormatter={toCurrencyFormatter}
        exchange={exchange}
      />
    </>
  );
};

export default ExchangeInfoTemplate;
