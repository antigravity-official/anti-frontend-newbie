import { CurrencyFormat } from "../../../../model/currency";
import { ExchangeInfo } from "../../../../model/exchange";
import ExchangeInfoBoard from "../../molecule/ExchangeInfoBoard";
import ExchangeInput from "../../molecule/ExchangeInput";

interface Props {
  exchangeInfo: ExchangeInfo;
  fromCurrencyFormat: CurrencyFormat;
  toCurrencyFormat: CurrencyFormat;
  fromCurrencyFormatter: (amount: string) => string;
  toCurrencyFormatter: (amount: string) => string;
  exchange: (amount: number) => number;
}

const ExchangeInfoBox = ({
  exchangeInfo,
  fromCurrencyFormat,
  toCurrencyFormat,
  fromCurrencyFormatter,
  toCurrencyFormatter,
  exchange,
}: Props) => {
  return (
    <>
      <ExchangeInfoBoard
        exchangeInfo={exchangeInfo}
        fromCurrencyUnit={fromCurrencyFormat.inKorean}
        toCurrencyUnit={toCurrencyFormat.inKorean}
        toCurrencyFormatter={toCurrencyFormatter}
      />
      <hr />
      <ExchangeInput
        fromCurrencyUnit={fromCurrencyFormat.inKorean}
        toCurrencyUnit={toCurrencyFormat.inKorean}
        fromCurrencyFormatter={fromCurrencyFormatter}
        toCurrencyFormatter={toCurrencyFormatter}
        exchange={exchange}
      />
    </>
  );
};

export default ExchangeInfoBox;
