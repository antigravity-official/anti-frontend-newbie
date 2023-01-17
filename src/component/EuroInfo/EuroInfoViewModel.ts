import React from 'react';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { EuroInfo } from './EuroInfoModel';
// utils
import { exchangeEurToKrw } from '../../utils/exchangeEurToKrw';
import { applyThousandSeparator } from '../../utils/applyThousandSeparator';
import { splitDecimal } from '../../utils/splitDecimal';

const getEurInfo = async () => {
  const res = await axios.get(
    'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
  );

  return res.data[0];
};

export default function EuroInfoViewModel() {
  const [euro, setEuro] = useState('');
  const {
    data: eurInfo,
    isLoading,
    isFetching,
  } = useQuery<EuroInfo, AxiosError>(['euro'], getEurInfo);
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
