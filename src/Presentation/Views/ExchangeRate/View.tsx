import ExchangeRateInfo from "../../components/ExchangeRate/ExchangeRateInfo";
import ExchangeInput from "../../components/ExchangeRate/ExchangeInput";
import { Currency } from "../../../../typing";
import { SyncLoader } from "react-spinners";
import useViewModel from "./ViewModel";
import React from "react";
import ExchangeRateTitle from "../../components/ExchangeRate/ExchangeRateTitle";
interface Props {
  currency: Currency;
}

const ExchangeRate = ({ currency }: Props) => {
  const {
    isReady,
    exchangeInfo,
    arrow,
    currencyName,
    formattingBasePrice,
    formattingChangePrice,
    changeRate,
    formattingCashBuyingPrice,
    formattingSellingPrice,
    formattingTtSellingPrice,
    formattingTtBuyingPrice,
    money,
    onChange,
    exchangedMoney,
    inputError,
  } = useViewModel(currency);

  if (!isReady || exchangeInfo === null) {
    return (
      <>
        <SyncLoader color="#36d7b7" />
        <div>환율 정보를 로딩중입니다.</div>
      </>
    );
  }

  return (
    <>
      <ExchangeRateTitle
        currencyName={currencyName}
        changeRate={changeRate}
        arrow={arrow}
        formattingChangePrice={formattingChangePrice}
        formattingBasePrice={formattingBasePrice}
      />
      <ExchangeRateInfo
        formattingCashBuyingPrice={formattingCashBuyingPrice}
        formattingSellingPrice={formattingSellingPrice}
        formattingTtBuyingPrice={formattingTtBuyingPrice}
        formattingTtSellingPrice={formattingTtSellingPrice}
      />
      <ExchangeInput
        money={money}
        onChange={onChange}
        exchangedMoney={exchangedMoney}
        currencyName={currencyName}
        inputError={inputError}
      />
    </>
  );
};

export default ExchangeRate;
