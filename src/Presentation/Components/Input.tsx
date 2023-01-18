import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
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
    <div className="relative mt-1 rounded-md shadow-sm w-full flex items-center">
      <FaRegHandPointRight className="text-lg rotate-90 absolute -left-8 motion-reduce:hidden animate-bounce" />
      <input
        className="
        py-2.5 px-4 pr-10 text-md font-normal
        border border-violet-700 rounded-md 
        focus:outline-none
       bg-white text-gray-900
         placeholder:text-violet-700 
         placeholder:font-thin
       "
        type="number"
        value={amount}
        onChange={onAmountChange}
        onKeyPress={onKeyPress}
        {...rest}
      />
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">{label}</span>
      </div>
    </div>
  );
}
