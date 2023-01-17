import React, { useState } from "react";
import styled from "styled-components";
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
    <ExchangeContainer>
      <ExchangeInput value={eru} onChange={HandleEurExchange} /> 유로 ▶︎ <ExchangeInput disabled value={krw} /> 원
    </ExchangeContainer>
  );
};

export default ExchangeView;

const ExchangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExchangeInput = styled.input`
  text-align: right;
  height: 20px;
  font-size: 16px;
  padding: 0 5px;
  margin: 0 5px;
  height: 25px;
  border-radius: 5px;
`;
