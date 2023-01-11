import React from 'react';

import { EurInfoTypes } from '../../types/eurInfo';
import Input from '../ui/Input';

import useEurKrw from '../../hooks/useEurKrw';

type Props = Pick<EurInfoTypes, 'basePrice'>;

const ExchangeInputs = (props: Props) => {
  const { eur, krw, onChangeHandler } = useEurKrw(props.basePrice);

  return (
    <div>
      <Input type="number" value={eur} onChange={onChangeHandler} /> 유로 ▶︎{' '}
      <Input type="text" disabled readOnly value={krw || 0} /> 원
    </div>
  );
};

export default ExchangeInputs;
