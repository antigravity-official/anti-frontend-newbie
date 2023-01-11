import styled, { keyframes } from "styled-components";

export default function LoadingIndicator() {
  return (
    <Overlay>
      <LoadingIndicatorContainer />
    </Overlay>
  );
}

const spin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(359deg) }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIndicatorContainer = styled.div`
  height: 5rem;
  width: 5rem;
  border: 6px solid #fff;
  border-right-color: #ff4c29;
  border-top-color: #ff4c29;
  border-radius: 100%;
  animation: ${spin} 800ms infinite linear;
`;
