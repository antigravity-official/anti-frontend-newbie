import React from 'react';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useExchangeApi } from '../../context/ExchangeApiContext';
import { EuroInfo } from './EuroInfoModel';
// utils
import { exchangeEurToKrw } from '../../utils/exchangeEurToKrw';
import { applyThousandSeparator } from '../../utils/applyThousandSeparator';
import { splitDecimal } from '../../utils/splitDecimal';

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
    const regex = /^\d*.?\d{0,2}$/;
    const euroStr = enteredEuro.replace(/(^0+)/, '').replace(/[^0-9.]/g, '');

    if (!regex.test(euroStr)) return;

    let { integer, decimal } = splitDecimal(euroStr);
    const hasDecimalPoint = enteredEuro.includes('.');
    integer = applyThousandSeparator(integer);
    const euro = integer + ((hasDecimalPoint && '.') || '') + decimal;

    setEuro(euro);
  };

  return { euro, krw, eurInfo, isLoading, isFetching, onChange };
}
