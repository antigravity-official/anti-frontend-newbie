import { CurrencyFormat } from "../../../../model/currency";
import { ExchangeInfo } from "../../../../model/exchange";
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
  return (
    <>
      <LoadingMessage
        isLoading={!exchangeInfo}
        message="환율 정보를 불러오고 있습니다"
      >
        <ExchangeInfoBox
          exchangeInfo={exchangeInfo!}
          fromCurrencyFormat={fromCurrencyFormat}
          toCurrencyFormat={toCurrencyFormat}
          fromCurrencyFormatter={fromCurrencyFormatter}
          toCurrencyFormatter={toCurrencyFormatter}
          exchange={exchange}
        />
      </LoadingMessage>
    </>
  );
};

export default ExchangeInfoTemplate;
