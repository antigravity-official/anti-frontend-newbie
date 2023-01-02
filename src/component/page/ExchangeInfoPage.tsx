import { useEffect, useState } from "react";
import { formatCurrency } from "../../model/currency";
import { exchange, ExchangeInfo } from "../../model/exchange";

interface Props {
  getExchangeInfo: () => Promise<ExchangeInfo>;
  fromCurrency: string;
  toCurrency: string;
}

type ExchangeInfoState = ExchangeInfo | undefined;
type AmountState = string;

const ExchangeInfoPage = ({
  getExchangeInfo,
  fromCurrency,
  toCurrency,
}: Props) => {
  const [exchangeInfo, setExchangeInfo] =
    useState<ExchangeInfoState>(undefined);
  const [amount, setAmount] = useState<AmountState>("");

  useEffect(() => {
    getExchangeInfo().then((value) => {
      setExchangeInfo(value);
    });

    return () => {};
  }, [getExchangeInfo]);

  if (!exchangeInfo) return null;

  return (
    <>
      <div>환율기준 (1 {fromCurrency})</div>
      <div>
        {formatCurrency(exchangeInfo.basePrice) + toCurrency}
        {exchangeInfo.basePrice - exchangeInfo.openingPrice > 0 && "▲"}
        {exchangeInfo.basePrice - exchangeInfo.openingPrice < 0 && "▼"}
        {formatCurrency(exchangeInfo.changePrice) + toCurrency}(
        {(exchangeInfo.changePrice / exchangeInfo.basePrice) * 100}
        %)
      </div>
      <div>
        <div>
          살때 : {formatCurrency(exchangeInfo.cashBuyingPrice) + toCurrency}
        </div>
        <div>
          팔때 : {formatCurrency(exchangeInfo.cashSellingPrice) + toCurrency}
        </div>
        <div>
          보낼때 : {formatCurrency(exchangeInfo.ttSellingPrice) + toCurrency}
        </div>
        <div>
          받을때 : {formatCurrency(exchangeInfo.ttBuyingPrice) + toCurrency}
        </div>
      </div>
      <hr />
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      {" " + fromCurrency}
      {" ▶︎ "}
      <input
        disabled
        value={
          !!amount.length
            ? exchange(parseFloat(amount), exchangeInfo.basePrice)
            : ""
        }
      />
      {" " + toCurrency}
    </>
  );
};

export default ExchangeInfoPage;
