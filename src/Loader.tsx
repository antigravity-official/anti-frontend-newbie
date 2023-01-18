import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  55% {transform: translate(-50%, -50%) rotate(0deg)}
  80% {transform: translate(-50%, -50%) rotate(360deg)}
  100% {transform: translate(-50%, -50%) rotate(360deg)}
`;

const dot1 = keyframes`
  20% {transform: scale(1)}
  45% {transform: translate(16px, 12px) scale(.45)}
  60% {transform: translate(80px, 60px) scale(.45)}
  80% {transform: translate(80px, 60px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
`;

const dot2 = keyframes`
  20% {transform: scale(1)}
  45% {transform: translate(-16px, 12px) scale(.45)}
  60% {transform: translate(-80px, 60px) scale(.45)}
  80% {transform: translate(-80px, 60px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
`;

const dot3 = keyframes`
  20% {transform: scale(1)}
  45% {transform: translateY(-18px) scale(.45)}
  60% {transform: translateY(-90px) scale(.45)}
  80% {transform: translateY(-90px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
`;

const Container = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  filter: url('#goo');
  animation: ${rotate} 2s ease-in-out infinite;
`;

const Dot = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Dot1 = styled(Dot)`
  background-color: #f1e9ae;
  animation: ${dot1} 2s ease infinite, index 6s -2s ease infinite;
`;

const Dot2 = styled(Dot)`
  background-color: #fe55f7;
  animation: ${dot2} 2s ease infinite, index 6s -4s ease infinite;
`;

const Dot3 = styled(Dot)`
  background-color: #55fed8;
  animation: ${dot3} 2s ease infinite, index 6s ease infinite;
`;

const Loader = () => {
  return (
    <>
      <Container>
        <Dot1></Dot1>
        <Dot2></Dot2>
        <Dot3></Dot3>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Loader;
