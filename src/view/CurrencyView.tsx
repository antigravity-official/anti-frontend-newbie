import React, { useState } from 'react';
import { DashBoard, Input, Output } from '../components/UI';
import { IViewModel } from '../types';
import styled from "styled-components";

function CurrencyView({
  viewModel,
}: {
  viewModel: IViewModel;
  
}) {
  const [render, setRender] = useState<boolean>(false);
  const testChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    viewModel.handleChange(e)
    setRender(!render)
  }

  console.log('View Render');

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
        <Input handleChange={testChange} input={viewModel.value} />
        <Icon>🔄</Icon>
        <Output value={viewModel.getCurrency(viewModel.value)} />
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
  justify-content: center;
  align-items: center;
`
const Icon = styled.h1`
  margin: 0 20px ;
`

export default CurrencyView;
