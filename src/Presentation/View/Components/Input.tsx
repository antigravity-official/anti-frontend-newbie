import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  amount: number;
  onAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

export default function Input({ label, amount, onAmountChange, onSubmit, ...rest }: InputProps) {
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <label>
      <span>{label}</span>
      <input type="number" value={amount} onChange={onAmountChange} {...rest} onKeyPress={onKeyPress} />
    </label>
  );
}
