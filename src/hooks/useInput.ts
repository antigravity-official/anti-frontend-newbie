import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

export default function useInput<T>(
  initialValue: T
): [T, (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void, () => void, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value as unknown as T;
    setValue(value);
  };

  const handleReset = () => setValue(initialValue);

  return [value, handleChange, handleReset, setValue];
}
