import React from 'react';
import { DashBoard, Input, Output } from '../components/UI';
import { IViewModel } from '../types';
import styled from "styled-components";

function CurrencyView({
  viewModel,
  handleChange,
  value
}: {
  viewModel: IViewModel;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {

  return (
    <Wrapper>
      <DashBoard
        basePrice={viewModel.info.basePrice}
        openingPrice={viewModel.info.openingPrice}
        changePrice={viewModel.info.changePrice}
        cashBuyingPrice={viewModel.info.cashBuyingPrice}
        cashSellingPrice={viewModel.info.cashSellingPrice}
        ttSellingPrice={viewModel.info.ttSellingPrice}
        ttBuyingPrice={viewModel.info.ttBuyingPrice}
      />
      <InputWrapper>
        <Input handleChange={handleChange} input={value} />
        <h1>🔄</h1>
        <Output value={viewModel.calOut(value)} />
      </InputWrapper>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default CurrencyView;
