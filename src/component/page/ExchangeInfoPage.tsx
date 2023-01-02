import { useEffect, useState } from "react";
import { ExchangeInfo } from "../../model/exchange";

interface Props {
  getExchangeInfo: () => Promise<ExchangeInfo>;
  currencyInKorean: string;
}

type ExchangeInfoState = ExchangeInfo | undefined;
type AmountState = string;

const ExchangeInfoPage = ({ getExchangeInfo, currencyInKorean }: Props) => {
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
      <div>환율기준 (1 {currencyInKorean})</div>
      <div>
        {exchangeInfo.basePrice}
        {exchangeInfo.basePrice - exchangeInfo.openingPrice > 0 && "▲"}
        {exchangeInfo.basePrice - exchangeInfo.openingPrice < 0 && "▼"}
        {exchangeInfo.changePrice}원 (
        {(exchangeInfo.changePrice / exchangeInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {exchangeInfo.cashBuyingPrice}</div>
        <div>팔때 : {exchangeInfo.cashSellingPrice}</div>
        <div>보낼때 : {exchangeInfo.ttSellingPrice}</div>
        <div>받을때 : {exchangeInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      {" " + currencyInKorean} ▶︎ <input disabled /> 원
    </>
  );
};

export default ExchangeInfoPage;
