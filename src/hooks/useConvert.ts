import React, { useState } from 'react';

type ConvertInfo = {
  name: string;
  locale: string;
  unit: string;
  convert: (amount: number, price: number) => number;
  format: (amount: number) => number;
};

type ConvertType = { from: ConvertInfo; into: ConvertInfo };
type ReturnType = {
  from: ConvertInfo;
  into: ConvertInfo;
  result: string;
  isReady: boolean;
  handleConvert: (amount: number, price: number) => void;
  handleSwitch: () => void;
  handleReset: () => void;
};

export default function useConvert(initialValue: ConvertType): ReturnType {
  const [from, setFrom] = useState(initialValue.from);
  const [into, setInto] = useState(initialValue.into);
  const [result, setResult] = useState('');
  const [isReady, setIsReady] = useState(false);

  const handleConvert = (amount: number, price: number) => {
    const { convert } = from;
    const { locale, unit, format } = into;

    setResult(`${format(convert(amount, price)).toLocaleString(locale)}${unit}`);

    setIsReady(false);
    const timeout = setTimeout(() => {
      setIsReady(true);

      return () => {
        clearTimeout(timeout);
      };
    }, 1000);
  };

  const handleSwitch = () => {
    setFrom(into);
    setInto(from);
  };

  const handleReset = () => {
    setFrom(initialValue.from);
    setInto(initialValue.into);
  };

  return { from, into, result, isReady, handleConvert, handleSwitch, handleReset };
}
