import { ChangeEventHandler, useEffect, useState } from "react";
import { CommaPosition, formatCurrency } from "../../model/currency";
import { ExchangeInfo } from "../../model/exchange";

export type CurrencyCode = "EUR" | "KRW";

interface CurrencyFormat {
  commaPosition: CommaPosition;
  decimalPlace: number;
  inKorean: string;
}

interface Props {
  getExchangeInfo: () => Promise<ExchangeInfo>;
  fromCurrencyCode: CurrencyCode;
  toCurrencyCode: CurrencyCode;
}

type ExchangeInfoState = ExchangeInfo | undefined;
type AmountState = string;

const ExchangeInfoPage = ({
  getExchangeInfo,
  fromCurrencyCode,
  toCurrencyCode,
}: Props) => {
  const [exchangeInfo, setExchangeInfo] =
    useState<ExchangeInfoState>(undefined);
  const [amount, setAmount] = useState<AmountState>("0");

  useEffect(() => {
    getExchangeInfo().then((value) => {
      setExchangeInfo(value);
    });

    return () => {};
  }, [getExchangeInfo]);

  if (!exchangeInfo) return null;

  const fromCurrencyFormat = CURRENCY_FORMAT[fromCurrencyCode];
  const toCurrencyFormat = CURRENCY_FORMAT[toCurrencyCode];

  const handleFromCurrencyChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let { value } = event.target;
    value = value.replaceAll(/[^0-9.]/g, "");

    if (!value.length) {
      setAmount("0");
      return;
    }

    const decimalPoint = value.indexOf(".");
    if (decimalPoint >= 0) {
      value =
        (decimalPoint > 0 ? "" : "0") +
        value.slice(
          undefined,
          decimalPoint +
            (fromCurrencyFormat.decimalPlace
              ? fromCurrencyFormat.decimalPlace + 1
              : 0)
        );
    }

    if (value.match(/[0]+[1-9]/)) {
      value = value.replace(/^0+/, "");
    } else {
      value = value.replace(/^0+/, "0");
    }

    setAmount(value);
  };

  const formatToCurrencyFormat = (
    amount: number,
    showCurrencyUnit: boolean = true
  ): string => {
    return (
      formatCurrency(amount, { ...toCurrencyFormat }) +
      (showCurrencyUnit ? toCurrencyFormat.inKorean : "")
    );
  };

  const exchange = (amount: number) => amount * exchangeInfo.basePrice;

  return (
    <>
      <div>환율기준 (1 {fromCurrencyFormat.inKorean})</div>
      <div>
        {formatToCurrencyFormat(exchangeInfo.basePrice)}
        {exchangeInfo.basePrice - exchangeInfo.openingPrice > 0 && " ▲"}
        {exchangeInfo.basePrice - exchangeInfo.openingPrice < 0 && " ▼"}
        {formatToCurrencyFormat(exchangeInfo.changePrice)} (
        {(exchangeInfo.changePrice / exchangeInfo.basePrice) * 100}
        %)
      </div>
      <div>
        <div>살때 : {formatToCurrencyFormat(exchangeInfo.cashBuyingPrice)}</div>
        <div>
          팔때 : {formatToCurrencyFormat(exchangeInfo.cashSellingPrice)}
        </div>
        <div>
          보낼때 : {formatToCurrencyFormat(exchangeInfo.ttSellingPrice)}
        </div>
        <div>받을때 : {formatToCurrencyFormat(exchangeInfo.ttBuyingPrice)}</div>
      </div>
      <hr />
      <input type="text" value={amount} onChange={handleFromCurrencyChange} />
      {" " + fromCurrencyFormat.inKorean}
      {" ▶︎ "}
      <input
        disabled
        value={formatToCurrencyFormat(exchange(parseFloat(amount)), false)}
      />
      {" " + toCurrencyFormat.inKorean}
    </>
  );
};

export default ExchangeInfoPage;

const CURRENCY_FORMAT: { [key in CurrencyCode]: CurrencyFormat } = {
  EUR: {
    commaPosition: CommaPosition.thoudsands,
    decimalPlace: 2,
    inKorean: "유로",
  },
  KRW: {
    commaPosition: CommaPosition.thoudsands,
    decimalPlace: 0,
    inKorean: "원",
  },
};
