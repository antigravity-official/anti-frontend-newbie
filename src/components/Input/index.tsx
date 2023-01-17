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
  const inputFormat = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^-\.0-9]/g, "");
    const checkIsNumber = new RegExp(/(-?\d+)(\d{3})/);
    const pointIdx = e.currentTarget.value.indexOf(".", 0);
    const splitPoint = e.currentTarget.value.split(".");

    while (checkIsNumber.test(splitPoint[0])) {
      splitPoint[0] = splitPoint[0].replace(checkIsNumber, "$1,$2");
    }

    if (pointIdx > -1) {
      e.currentTarget.value =
        splitPoint[0] + "." + splitPoint[1].substring(0, 2);
    } else {
      e.currentTarget.value = splitPoint[0];
    }
  };

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
