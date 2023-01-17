import React, { useState } from 'react';
import { Input, Output } from '.';
import { IViewModel } from '../../types';
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

  return (
      <InputWrapper>
        <Input handleChange={testChange} input={viewModel.value} />
        <Icon>🔄</Icon>
        <Output value={viewModel.getCurrency(viewModel.value)} />
      </InputWrapper>
  );
}

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
