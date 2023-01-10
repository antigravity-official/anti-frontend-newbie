import { useState } from 'react';

export interface UseInputReturnType {
  inputValue: number;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
}

const useInput = (defaultInputValue: number): UseInputReturnType => {
  const [inputValue, setInputValue] = useState(defaultInputValue);

  const onChange = ({ target }: { target: HTMLInputElement }) =>
    setInputValue(Number(target.value));

  return { inputValue, onChange };
};

export default useInput;
