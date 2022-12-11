import React, { useState } from "react";
import styled from "styled-components";
import useExchange from "../Hook/useExchange";
import { PriceType } from "../types/types";

const ExchangeComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #000;
  border-radius: 10px;

  height: 13rem;
  width: 22rem;
`;

const InputEl = styled.input`
  width: 12rem;
  text-align: end;
  border: none;
  outline: none;

  background-color: transparent;
  font-size: 1.3rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  width: 15rem;
  border-bottom: 4px solid #122281;
`;

const Arrow = styled.div`
  font-size: 2rem;
`;

const CurrencyDisplay = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

const ExchangeEurToKrw = ({ basePrice }: PriceType) => {
  const [value, setValue] = useState<number>(0);
  const exchangeKrw = useExchange(value, basePrice);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(+event.target.value);
  };

  return (
    <ExchangeComponent>
      <InputBox>
        <CurrencyDisplay>유로</CurrencyDisplay>
        <InputEl placeholder="0" onChange={onChange} />
      </InputBox>
      <Arrow>👇</Arrow>
      <InputBox>
        <CurrencyDisplay>원</CurrencyDisplay>
        <InputEl value={exchangeKrw} disabled />
      </InputBox>
    </ExchangeComponent>
  );
};

export default ExchangeEurToKrw;
