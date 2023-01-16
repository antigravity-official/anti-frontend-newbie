import React, { useState } from "react";
import ExchangeViewModel from "../viewModel/ExchangeViewModel";

const ExchangeView = () => {
  const [krw, setKrw] = useState(0);

  const HandleEurExchange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setKrw(await ExchangeViewModel(event.target.value));
  };

  return (
    <>
      <input onChange={HandleEurExchange} /> 유로 ▶︎ <input disabled value={krw} /> 원
    </>
  );
};

export default ExchangeView;
