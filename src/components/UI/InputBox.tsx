import React, { useState } from 'react';
import { CustomInput } from './';
import { IViewModel } from '../../types';
import styled from 'styled-components';

function CurrencyView({ viewModel }: { viewModel: IViewModel }) {
  const [render, setRender] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    viewModel.handleChange(e);
    setRender(!render);
  };

  return (
    <InputWrapper>
      <CustomInput
        handleChange={handleChange}
        value={viewModel.value}
        name="EUR"
        placeholder="0"
      />
      <Icon>🔄</Icon>
      <CustomInput
        value={viewModel.getCurrency(viewModel.value)}
        name="KRW"
        placeholder="0"
        disabled={true}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.h1`
  margin: 0 20px;
`;

export default CurrencyView;
