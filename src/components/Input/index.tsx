import inputFormat from "utils/inputFormat";
import { InputContainer } from "./style";

interface InputProps {
  label: string;
  id: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { label, id, value, onChange, disabled } = props;

  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => inputFormat(e)}
      />
    </InputContainer>
  );
};
