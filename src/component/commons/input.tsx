import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface IInputProps {
  type?: string | undefined;
  id?: string;
  width?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IStyle {
  width: string;
}

const Input = (props: IInputProps) => {
  return (
    <InputStyle
      id={props.id}
      width={props.width || "100%"}
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled || false}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;

const InputStyle = styled.input`
  width: ${(props: IStyle) => props.width};
  border-radius: 2px;
  padding: 0.5rem;
  border: 1px solid gray;
  transition: all 0.3s ease;
  outline: none;

  :focus {
    border: 1px solid gray;
  }
`;
