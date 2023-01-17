import React, { useState } from "react";
import ExchangeComaViewModel from "../viewModel/ExchangeComaViewModel";
import ExchangeViewModel from "../viewModel/ExchangeViewModel";

const ExchangeView = () => {
  const [krw, setKrw] = useState<string>("");
  const [eru, setEru] = useState<string>("");

  const HandleEurExchange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setEru(ExchangeComaViewModel(event.target.value, "eu"));
    setKrw(await ExchangeViewModel(event.target.value));
  };

  return (
    <>
      <input value={eru} onChange={HandleEurExchange} /> 유로 ▶︎ <input disabled value={krw} /> 원
    </>
  );
};

export default ExchangeView;
