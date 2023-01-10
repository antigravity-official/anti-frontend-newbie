import React, { ChangeEvent } from "react";

interface TextInputProp {
  type: string;
  setValue?: (str: number) => void;
  value: number;
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
    setValue && setValue(e.target.valueAsNumber);
  };

  return (
    <>
      <input
        type={type}
        onChange={onChangeHandler}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      <span>{name}</span>
    </>
  );
};

export default TextInput;
