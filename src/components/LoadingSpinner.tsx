import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const LoadingSpanner = () => {
  return (
    <Loading>
      <div />
    </Loading>
  );
};

export default LoadingSpanner;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #50eac8;
    border-radius: 50%;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #50eac8 transparent transparent transparent;
  }
`;
