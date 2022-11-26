import React from 'react';
import styled from 'styled-components';
import { CalculatorType } from '../../types/types';

const Calculator = ({ exchange, eurToKrw, basePrice }: CalculatorType) => {
  return (
    <CalculatorWrap>
      <InputBox>
        <input
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            exchange(e.target.value, basePrice)
          }
        />
        <span>유로 </span>
      </InputBox>
      <DownArrow>⬇️</DownArrow>
      <InputBox>
        <input value={Math.round(eurToKrw).toLocaleString()} />
        <span> 원</span>
      </InputBox>
    </CalculatorWrap>
  );
};

export default Calculator;

const CalculatorWrap = styled.section`
  width: 400px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  input {
    width: 300px;
    height: 30px;
    margin-right: 5px;
    padding-left: 5px;
  }
`;

const DownArrow = styled.div`
  font-size: 20px;
  width: 100px;
  margin: 10px auto;
`;
