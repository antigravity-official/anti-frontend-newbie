import styled from '@emotion/styled';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface InputProps {
  type?: string;
  value: string | number;
  onChange?: (event: ChangeEvent) => void;
  disabled?: boolean;
}

const Input = ({ type, value, onChange, disabled }: InputProps) => {
  return (
    <InputContainer
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;

const InputContainer = styled.input`
  width: 100%;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
`;
