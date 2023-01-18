import { useState } from 'react';

type AnyOBJ = {
  [key: string]: unknown;
};

type ConvertInfo = AnyOBJ & {
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
  const [values, setValues] = useState(initialValue);
  const [result, setResult] = useState('');
  const [isReady, setIsReady] = useState(true);

  const handleConvert = (amount: number, price: number) => {
    const { convert } = values.from;
    const { locale, unit, format } = values.into;

    setIsReady(false);
    const timeout = setTimeout(() => {
      setResult(`${format(convert(amount, price)).toLocaleString(locale)}${unit}`);
      setIsReady(true);

      return () => {
        clearTimeout(timeout);
      };
    }, 1000);
  };

  const handleSwitch = () => {
    setValues(({ from, into }) => ({ from: into, into: from }));
  };

  const handleReset = () => {
    setValues(initialValue);
  };

  return { from: values.from, into: values.into, result, isReady, handleConvert, handleSwitch, handleReset };
}
