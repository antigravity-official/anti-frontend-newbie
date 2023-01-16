import React, { ChangeEvent } from 'react';

type DropDownsProps = {
  label: string;
  index: number;
  onChangeIndex: (e: ChangeEvent<HTMLSelectElement>) => void;
  info: { name: string; price: number }[];
};
export default function DropDowns({ label, index, onChangeIndex, info }: DropDownsProps) {
  return (
    <label>
      <span>{label}</span>
      <select value={index} onChange={onChangeIndex}>
        {info.map((opt, i) => (
          <option key={opt.name} value={i}>
            {opt.name}
          </option>
        ))}
      </select>
    </label>
  );
}
