import { CurrencyFormat, formatCurrency } from "../../../model/currency";
import { ExchangeInfo } from "../../../model/exchange";
import ExchangeInfoBoard from "../../molecule/ExchangeInfoBoard";
import ExchangeInput from "../../molecule/ExchangeInput";

interface Props {
  exchangeInfo: ExchangeInfo;
  fromCurrencyFormat: CurrencyFormat;
  toCurrencyFormat: CurrencyFormat;
  exchange: (amount: number) => number;
}

const ExchangeInfoBox = ({
  exchangeInfo,
  fromCurrencyFormat,
  toCurrencyFormat,
  exchange,
}: Props) => {
  const fromCurrencyFormatter = (amount: string) => {
    amount = amount.replaceAll(/[^0-9.]/g, "");

    if (!amount.length) {
      return "0";
    }

    const decimalPoint = amount.indexOf(".");
    if (decimalPoint >= 0) {
      amount =
        (decimalPoint > 0 ? "" : "0") +
        amount.slice(
          undefined,
          decimalPoint +
            (fromCurrencyFormat.decimalPlace
              ? fromCurrencyFormat.decimalPlace + 1
              : 0)
        );
    }

    if (amount.match(/[0]+[1-9]/)) {
      amount = amount.replace(/^0+/, "");
    } else {
      amount = amount.replace(/^0+/, "0");
    }

    return amount;
  };

  const toCurrencyFormatter = (amount: string): string => {
    return formatCurrency(parseFloat(amount), { ...toCurrencyFormat });
  };

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
        toCurrencyFormatter={(amount: string) => toCurrencyFormatter(amount)}
        exchange={exchange}
      />
    </>
  );
};

export default ExchangeInfoBox;
