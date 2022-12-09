import { useState } from "react";
import { Price } from "../pages/Main";

const ExchangeInput = (props: { eurInfo: Price }) => {
  const [krwPrice, setKrwPrice] = useState(0);

  const exchangeEurToKrw = (krw: number) => {
    setKrwPrice(krw * props.eurInfo.basePrice);
  };

  return (
    <>
      <input
        defaultValue={0}
        onChange={(e) => exchangeEurToKrw(Number(e.target.value))}
      />{" "}
      유로 ▶︎{" "}
      <input value={krwPrice.toLocaleString().split(".")[0] || ""} readOnly />{" "}
      원
    </>
  );
};

export default ExchangeInput;
