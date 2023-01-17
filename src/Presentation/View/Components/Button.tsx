import React, { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export default function Button({ title, ...rest }: ButtonType) {
  return <button {...rest}>{title}</button>;
}
