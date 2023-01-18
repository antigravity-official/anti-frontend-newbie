import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ParamProps {
  children: ReactNode;
  width: string | number;
  height: string | number;
}

const Box = styled.div<ParamProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
`;

const TextArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 19.3rem;
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 2;
`;

const Title = styled.div`
  width: 100%;
  height: 3.25rem;
  position: absolute;
  top: 0;
  background: #e7e7ea;
  mix-blend-mode: overlay;
  opacity: 0.5;
  z-index: 1;
`;

const Input = styled.input`
  width: 19.5rem;
  height: 3.25rem;
  position: absolute;
  top: 3.6rem;
  left: 1.25rem;
  text-align: right;
  background-color: transparent;
  color: #e7e7ea;
  border: none;
  font-size: 1.5rem;
  z-index: 1;
  &:focus {
    outline: none;
  }
`;

const MoneyUnit = styled.p`
  width: 19.3rem;
  position: absolute;
  bottom: 1.3rem;
  left: 1.25rem;
  text-align: right;
  font-size: 0.75rem;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  background: linear-gradient(297.71deg, #1a1548 0%, #21143f 100%);
  mix-blend-mode: normal;
  border-radius: 0.625rem;
`;

const Border = styled.div`
  position: absolute;
  mix-blend-mode: overlay;
  border-width: 1px 0px 0px 1px;
  border-style: solid;
  border-color: #e7e7ea;
  border-radius: 0.625rem;
`;

const InputCard = ({ children, width, height }: ParamProps) => {
  return (
    <>
      <Box width={`${width}rem`} height={`${height}rem`}>
        <TextArea>{children}</TextArea>
        <Title></Title>
        <Input maxLength={15}></Input>
        <MoneyUnit>1유로</MoneyUnit>
        <Background style={{ width: `${width}rem`, height: `${height}rem` }} />
        <Border style={{ width: `${width}rem`, height: `${height}rem` }} />
      </Box>
    </>
  );
};

export default InputCard;
