import React from "react";
import { Input } from "./Input.style";

function NumberInput({
  placeholder,
  disabled,
  onChange,
  value,
}: {
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}) {
  return (
    <Input
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      value={value}
    />
  );
}

export default NumberInput;
