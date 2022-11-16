import { ChangeEvent } from 'react';
import { Container } from './style';

interface IInputProps {
  type?: string;
  value?: string;
  defaultValue?: string | number | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  text?: string;
}

const Input = (props: IInputProps) => {
  return (
    <Container>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
      />
      {props.text}
    </Container>
  );
};

export default Input;
