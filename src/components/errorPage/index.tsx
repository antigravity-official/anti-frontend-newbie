import styled from "styled-components";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>Something went wrong :(</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorPage;

const ErrorContainer = styled.div``;
const ErrorMessage = styled.p``;
