import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Cycle />
    </SpinnerWrapper>
  );
};

export default Spinner;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const spin = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

const Cycle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    box-sizing: border-box;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 12px solid lightgrey;
    border-top-color: orange;
    animation: ${spin} 0.8s linear infinite;
  }
`;
