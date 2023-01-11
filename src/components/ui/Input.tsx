import React, { ChangeEvent } from 'react';

interface Props {
  type: string;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
}

const Input = (props: Props) => {
  return <input {...props} />;
};

export default Input;
