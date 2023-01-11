import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return <Spinner />;
};

const Spinner = styled.div`
  border: 14px solid #d0d0d0;
  border-top: 14px solid rgb(85, 254, 216);
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  animation: spin 1.3s backwards infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
