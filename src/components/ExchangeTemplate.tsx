import { useContext, useState, useEffect } from "react";
import * as api from "../api/apiContext";
import useInput from "../hooks/useInput";

const ExChangeTemplate = (): React.ReactElement => {
  const eurInfo = useContext(api.ApiContext);

  const {
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = eurInfo;

  const [toKrw, setKrw] = useState<number>();
  const euro = useInput("");
  const exchangeEurToKrw = (krw: number) => {
    setKrw(krw * basePrice);
  };

  useEffect(() => {
    exchangeEurToKrw(Number(euro.value));
  }, [euro.value]);

  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {Math.ceil(basePrice).toLocaleString()}
        {basePrice - openingPrice > 0 ? "▲" : "▼"}
        {Math.ceil(changePrice).toLocaleString()}원 (
        {(changePrice / basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {Math.ceil(cashBuyingPrice).toLocaleString()}</div>
        <div>팔때 : {Math.ceil(cashSellingPrice).toLocaleString()}</div>
        <div>보낼때 : {Math.ceil(ttSellingPrice).toLocaleString()}</div>
        <div>받을때 : {Math.ceil(ttBuyingPrice).toLocaleString()}</div>
      </div>
      <hr />
      <input defaultValue={euro.value} onChange={euro.onChange} /> 유로 ▶︎{" "}
      <input
        disabled
        readOnly
        value={toKrw ? Math.ceil(toKrw).toLocaleString() : ""}
      />
      원
    </>
  );
};
export default ExChangeTemplate;
