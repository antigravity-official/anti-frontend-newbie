import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      Loading...
      <LoaderCycle />
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.div``;

const spin = keyframes`
to {
    transform: rotate(1turn);
  }

`;

const LoaderCycle = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid white;
  border-radius: 50%;
  border-color: #ffffff #333333 #333333 #333333;
  animation: ${spin} 0.8s infinite ease-in-out;
`;
