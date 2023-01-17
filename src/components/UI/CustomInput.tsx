import React from 'react';
import styled from 'styled-components';

function CustomInput({
  value,
  handleChange,
  placeholder,
  name,
  disabled,
}: {
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  disabled?: boolean;
}) {
  return (
    <Wrapper>
      <Label htmlFor={name}>{name}</Label>
      {handleChange ? (
        <Input
          id={name}
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={value}
          disabled={disabled}
        />
      ) : (
        <Input id={name} placeholder={value} type="text" disabled={disabled} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Label = styled.label`
  font-size: 25px;
  font-weight: 600;
`;

const Input = styled.input`
  font-size: 20px;
  height: 20px;
`;

export default CustomInput;
