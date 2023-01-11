import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { TextInputProp } from "../types/TextInputProp";

const TextInput = ({
  type,
  setValue,
  value,
  disabled,
  readOnly,
  name,
}: TextInputProp) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regEur = value.replace(/[^0-9]/g, "");
    setValue && setValue(regEur);
  };

  return (
    <InputWrapper>
      <input
        type={type}
        onChange={onChangeHandler}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      <span>{name}</span>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  margin: 0.5rem auto 0;

  input {
    width: 90%;
    padding: 0.6rem;
    margin: 0.2rem auto;
  }

  span {
    right: 4px;
    padding: 0.7rem;
    color: darkgray;
    position: absolute;
  }
`;
export default TextInput;
