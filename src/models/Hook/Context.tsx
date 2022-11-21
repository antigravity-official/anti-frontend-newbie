import React, { useEffect, useState } from "react";
import { ExchangeData } from "./ModelData";
import { TextContents } from "../../types/Type";
import { getEurInfo } from "../API/api";
export const ExchangProvider: React.FC<TextContents> = ({ children }) => {
  const [data, setData] = useState({
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
  const [boolean, setBoolean] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      getEurInfo(setData).then(() => setBoolean(!boolean));
    }, 3000);
  }, []);

  return (
    <ExchangeData.Provider value={{ data, boolean }}>
      {children}
    </ExchangeData.Provider>
  );
};
