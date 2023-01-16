import React, { useState } from 'react';

type ConvertInfo = {
  name: string;
  locale: string;
  unit: string;
  getCurrency: any;
};

type ConvertType = { from: ConvertInfo; into: ConvertInfo };
type ReturnType = [ConvertInfo, ConvertInfo, string, (amount: number, price: number) => void, () => void, () => void];

export default function useConvert(initialValue: ConvertType): ReturnType {
  const [from, setFrom] = useState(initialValue.from);
  const [into, setInto] = useState(initialValue.into);
  const [result, setResult] = useState('');
  const [value, setValue] = useState(initialValue);

  const handleConvert = (amount: number, price: number) => {
    const { getCurrency, locale, unit } = into;
    setResult(getCurrency(amount, price).toLocaleString(locale) + unit);
  };

  const handleSwitch = () => {
    setFrom(into);
    setInto(from);
  };

  const handleReset = () => setValue(initialValue);
  return [from, into, result, handleConvert, handleSwitch, handleReset];
}
