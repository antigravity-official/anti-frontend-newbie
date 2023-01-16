import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type ReturnType<T> = [T, (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => T, Dispatch<SetStateAction<T>>];
export default function useInput<T>(initialValue: T): ReturnType<T> {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value as unknown as T;

    setValue(value);

    return value;
  };

  return [value, handleChange, setValue];
}
