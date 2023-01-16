import React, { ChangeEvent } from 'react';

type PriceSelectProps = {
  index: number;
  onChangeIndex: (e: ChangeEvent<HTMLSelectElement>) => void;
  priceInfo: { name: string; price: number }[];
};
export default function PriceSelect({ index, onChangeIndex, priceInfo }: PriceSelectProps) {
  return (
    <select value={index} onChange={onChangeIndex}>
      {priceInfo.map((opt, i) => (
        <option key={opt.name} value={i}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}
