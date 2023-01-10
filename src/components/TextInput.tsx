import React, { ChangeEvent } from "react";

interface TextInputProp {
  type: string;
  setValue?: (str: string) => void;
  value: string;
  disabled?: boolean;
  readOnly?: boolean;
  name: string;
}
const TextInput = ({
  type,
  setValue,
  value,
  disabled,
  readOnly,
  name,
}: TextInputProp) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(e.target.value);
  };

  return (
    <div>
      <input
        type={type}
        onChange={onChangeHandler}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      <span>{name}</span>
    </div>
  );
};

export default TextInput;
