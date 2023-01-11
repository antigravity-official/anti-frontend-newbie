import ExchangeInfo from "./ExchangeInfo";
import ExchangeInput from "./ExchangeInput";
import styled from "styled-components";
import useEurInfo from "../hooks/useEurInfo";
import LoadingIndicator from "./LoadingIndicator";

export default function Exchange() {
  const { isLoading, isError } = useEurInfo();

  if (isError) return <div>Error</div>;

  return (
    <Container>
      <ExchangeWrapper>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <div>
            <ExchangeInfo />
            <ExchangeInput />
          </div>
        )}
      </ExchangeWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

const ExchangeWrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaaaaa;
  border-radius: 1rem;
`;
