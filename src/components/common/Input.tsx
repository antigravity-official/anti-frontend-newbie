type InputProps = {
  type: "text" | "number";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  autoFoucs?: boolean;
  disabled?: boolean;
};

const Input = ({ type, onChange, value, autoFoucs, disabled }: InputProps) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      autoFocus={autoFoucs}
      disabled={disabled}
      className="h-7 w-[calc(100%-3rem)] border-r-[1px]"
    />
  );
};

export default Input;
