import React from "react";
import { INumberInput } from "../../../types/types";
import { Input } from "./Input.style";

function NumberInput({ placeholder, disabled, onChange, value }: INumberInput) {
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
