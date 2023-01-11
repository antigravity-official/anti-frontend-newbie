import { useState } from "react";

export const CurrencyConverterViewModel = () => {
  const [currInput, setCurrInput] = useState<number>(0);

  const unformatCurrInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): number => {
    const value: string = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    return removedCommaValue;
  };

  const onChange = (value: number) => {
    setCurrInput(value);
  };

  return { unformatCurrInput, onChange, currInput };
};
