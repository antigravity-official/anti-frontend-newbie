import React from "react";
import styled from "styled-components";
import Spinner from "./components/Spinner";
import EurInfoView from "./view/EurInfoView";
import ExchangeView from "./view/ExchangeView";
import EurInfoViewModel from "./viewModel/EurInfoViewModel";

export const App = () => {
  const { isReady } = EurInfoViewModel();
  // view
  if (!isReady) return <Spinner />;

  return (
    <MainContainer>
      <EurInfoView />
      <hr />
      <ExchangeView />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 95vh;
  margin: 10px;

  hr {
    width: 100%;
  }
`;
