import { ExchangeInfo } from "../../../../model/exchange";

interface Props {
  exchangeInfo: ExchangeInfo;
  fromCurrencyUnit: string;
  toCurrencyUnit: string;
  toCurrencyFormatter: (amount: string) => string;
}

const ExchangeInfoBoard = ({
  exchangeInfo,
  fromCurrencyUnit,
  toCurrencyUnit,
  toCurrencyFormatter,
}: Props) => {
  const toCurrencyHandler = (amount: number): string => {
    return toCurrencyFormatter(String(amount));
  };

  return (
    <>
      <div>환율기준 (1 {fromCurrencyUnit})</div>
      <div>
        {toCurrencyHandler(exchangeInfo.basePrice) + toCurrencyUnit}
        {exchangeInfo.basePrice - exchangeInfo.openingPrice > 0 && " ▲"}
        {exchangeInfo.basePrice - exchangeInfo.openingPrice < 0 && " ▼"}
        {toCurrencyHandler(exchangeInfo.changePrice) + toCurrencyUnit}{" "}
        {`(${(exchangeInfo.changePrice / exchangeInfo.basePrice) * 100}%)`}
      </div>
      <div>
        <div>
          {`살때 : ${
            toCurrencyHandler(exchangeInfo.cashBuyingPrice) + toCurrencyUnit
          }`}
        </div>
        <div>
          {`팔때 : ${
            toCurrencyHandler(exchangeInfo.cashSellingPrice) + toCurrencyUnit
          }`}
        </div>
        <div>
          {`보낼때 : ${
            toCurrencyHandler(exchangeInfo.ttSellingPrice) + toCurrencyUnit
          }`}
        </div>
        <div>
          {`받을때 : ${
            toCurrencyHandler(exchangeInfo.ttBuyingPrice) + toCurrencyUnit
          }`}
        </div>
      </div>
    </>
  );
};

export default ExchangeInfoBoard;
