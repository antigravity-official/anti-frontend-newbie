import React from "react";
import styled from "styled-components";

const LoadingComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingTitle = styled.div`
  font-size: 5rem;
  margin-bottom: 5rem;
`;

const ProgressCircle = styled.div`
  width: 7rem;
  height: 7rem;

  border: 10px dotted tomato;

  border-radius: 80%;

  animation: rotate-circle 1.5s ease-in-out infinite;
  transform-origin: 50% 50%;

  @keyframes rotate-circle {
    100% {
      transform: rotate(240deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingComponent>
      <LoadingTitle>Loading...</LoadingTitle>
      <ProgressCircle />
    </LoadingComponent>
  );
};

export default Loading;
