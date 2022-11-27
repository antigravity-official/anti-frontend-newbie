import styled from '@emotion/styled';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface InputProps {
  type?: string;
  value: string | number;
  onChange?: (event: ChangeEvent) => void;
  disabled?: boolean;
  placeholder?: string;
}

const Input = ({
  type,
  value,
  onChange,
  disabled,
  placeholder,
}: InputProps) => {
  return (
    <InputContainer
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default Input;

const InputContainer = styled.input`
  width: 100%;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding-left: 0.3rem;
`;
