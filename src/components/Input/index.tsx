import React, { ForwardedRef } from "react";
import inputFormat from "utils/inputFormat";
import { InputContainer } from "./style";

interface InputProps {
  label: string;
  id: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { label, id, onChange, disabled } = props;

    return (
      <InputContainer>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          ref={ref}
          id={id}
          onChange={onChange}
          disabled={disabled}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => inputFormat(e)}
        />
      </InputContainer>
    );
  }
);
