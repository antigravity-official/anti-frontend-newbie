import React, { useEffect, useState, useContext } from "react";
import { DataFunc, TextContents } from "../types/Type";
import { getEurInfo } from "../API/api";
import { createContext } from "react";
import { ApiExchange } from "../types/Type";
import { onChangeEuro } from "../model";
import { ViewModel } from "./ViewModel";
import { ApiExchangeContents } from "../types/Type";
export const ExchangeData = createContext(null);

export const ExchangProvider: React.FC<TextContents> = ({ children }) => {
  const [data, setData] = useState<ApiExchangeContents>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
    change: "",
    provider: "",
    modifiedAt: "",
  });
  const [isChange, setIsChange] = useState<boolean>(false);
  const [euro, setEuro] = useState<number>(null);
  const [krw, setKrw] = useState<number>();
  // console.log(data);
  // console.log(isChange);
  useEffect(() => {
    setTimeout(() => {
      getEurInfo(setData).then(() => setIsChange(!isChange));
    }, 1000);
  }, []);

  return (
    <ExchangeData.Provider
      value={{
        data,
        setData,
        isChange,
        setIsChange,
        euro,
        setEuro,
        krw,
        setKrw,
      }}
    >
      <ViewModel />
      {children}
    </ExchangeData.Provider>
  );
};

export const useExchangInfo = () => {
  const context = useContext(ExchangeData);
  return context;
};
