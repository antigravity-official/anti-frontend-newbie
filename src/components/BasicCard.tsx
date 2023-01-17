import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ParamProps {
  children: ReactNode;
  width: string | number;
  height: string | number;
}

const Box = styled.div<ParamProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
`;

const TextArea = styled.div`
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

const BasicCard = ({ children, width, height }: ParamProps) => {
  return (
    <>
      <Box width={`${width}rem`} height={`${height}rem`}>
        <TextArea>{children}</TextArea>
        <Background style={{ width: `${width}rem`, height: `${height}rem` }} />
        <Border style={{ width: `${width}rem`, height: `${height}rem` }} />
      </Box>
    </>
  );
};

export default BasicCard;
