import React from 'react';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useExchangeApi } from '../../context/ExchangeApiContext';
import { EuroInfo } from './EuroInfoModel';
// utils
import {
  applyThousandSeparator,
  checkDecimalScale,
  convertOnlyNumOrDot,
  exchangeEurToKrw,
  splitDecimal,
} from '../../utils/numberFormat';

export default function EuroInfoViewModel() {
  const [euro, setEuro] = useState('');
  const exchangeApi = useExchangeApi();
  const {
    data: eurInfo,
    isLoading,
    isFetching,
  } = useQuery<EuroInfo, AxiosError>(['euro'], async () => exchangeApi.euro());
  const krw = exchangeEurToKrw(euro, eurInfo?.basePrice as number);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEuro = e.target.value;
    const euroStr = convertOnlyNumOrDot(enteredEuro);

    if (!checkDecimalScale(euroStr)) return;

    let { integer, decimal } = splitDecimal(euroStr);
    const hasDecimalPoint = enteredEuro.includes('.');
    integer = applyThousandSeparator(integer);
    const euro = integer + ((hasDecimalPoint && '.') || '') + decimal;

    setEuro(euro);
  };

  return { euro, krw, eurInfo, isLoading, isFetching, onChange };
}
