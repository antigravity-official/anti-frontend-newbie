import React, { useEffect, useState } from "react";
import { EuroInfo } from "../types/type";
import { NumericFormat } from "react-number-format";

import { ExchangeRateInfoViewModel } from "../viewmodel/ExchangeRateInfoViewModel";
import { ExchangeRateInfoModel } from "../model/ExchangeRateInfoModel";

interface Props {
  euroInfo: EuroInfo;
}

export const ExchangeRateInfoView = ({ euroInfo }: Props) => {
  // const [currInput, setCurrInput] = useState<number>(0);

  // const getEurInfo = () => {
  //   setEurInfo({
  //     basePrice: krweur.basePrice,
  //     openingPrice: krweur.openingPrice,
  //     changePrice: krweur.changePrice,
  //     cashBuyingPrice: krweur.cashBuyingPrice,
  //     cashSellingPrice: krweur.cashSellingPrice,
  //     ttSellingPrice: krweur.ttSellingPrice,
  //     ttBuyingPrice: krweur.ttBuyingPrice,
  //   });
  //   setReady(true);
  // };

  // const exchangeEurToKrw = (krw: number) => krw * eurInfo?.basePrice;
  // const exchangeEurToKrw = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value: string = e.target.value;
  //   const removedCommaValue = Number(value.replaceAll(",", ""));
  //   setCurrInput(eurInfo.basePrice * removedCommaValue);
  // };

  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {euroInfo.basePrice}
        {euroInfo.basePrice - euroInfo.openingPrice > 0 ? "▲" : "▼"}
        {euroInfo.changePrice}원 (
        {(euroInfo.changePrice / euroInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {euroInfo.cashBuyingPrice}</div>
        <div>팔때 : {euroInfo.cashSellingPrice}</div>
        <div>보낼때 : {euroInfo.ttSellingPrice}</div>
        <div>받을때 : {euroInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      {/* <NumericFormat
        onChange={(e) => exchangeEurToKrw(e)}
        decimalScale={2}
        thousandSeparator=","
      ></NumericFormat>
      유로 ▶︎
      <NumericFormat
        value={currInput}
        decimalScale={0}
        thousandSeparator=","
        disabled
      ></NumericFormat>
      원 */}
    </>
  );
};
