import React, { ChangeEvent, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  amount: number;
  onAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function CurrencyInput({ label, amount, onAmountChange, ...rest }: InputProps) {
  return (
    <label>
      <span>{label}</span>
      <input type="number" value={amount} onChange={onAmountChange} {...rest} />
    </label>
  );
}
