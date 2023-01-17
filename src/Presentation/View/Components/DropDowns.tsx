import React, { ChangeEvent } from 'react';

type DropDownsProps = {
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  array: { name: string; data: number }[];
};

export default function DropDowns({ label, array, value, onChange }: DropDownsProps) {
  return (
    <label>
      <span>{label}</span>
      <select value={value} onChange={onChange}>
        {array.map((item, i) => (
          <option key={item.name} value={item.data}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}
