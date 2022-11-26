import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <LoadingBar>
        <Dot />
        <Dot />
        <Dot />
      </LoadingBar>
    </Wrapper>
  );
};

export default Loading;

export const Wrapper = styled.div`
  z-index: 9998;
`;

const upside = keyframes`
  0%,
  100% {
    transform: translateY(0px) ;
  }
  50% {
    transform: translateY(-15px) ;
  }
`;

export const LoadingBar = styled.div`
  transform: translate(0%, 50%);
  width: auto;
  height: 200px;
  display: flex;
  justify-content: center;
  z-index: 9999;

  & > div:not(:first-child) {
    margin-left: 20px;
  }

  & > div:nth-child(1) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 100ms;
  }

  & > div:nth-child(2) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 250ms;
  }

  & > div:nth-child(3) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 400ms;
  }
`;

export const Dot = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.deepGrey};
  border-radius: 50%;
`;
