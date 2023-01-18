import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;
  position: relative;
`;

const TextArea = styled.div`
  font-size: 1.5rem;
  z-index: 1;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(297.71deg, #1a1548 0%, #21143f 100%);
  mix-blend-mode: normal;
  border-radius: 50%;
`;

const Border = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  mix-blend-mode: overlay;
  border: 1px solid #e7e7ea;
  border-radius: 50%;
  opacity: 0.75;
`;

const CircleCard = () => {
  return (
    <>
      <Box>
        <TextArea>=</TextArea>
        <Background />
        <Border />
        <Border />
      </Box>
    </>
  );
};

export default CircleCard;
