import styled from "styled-components";
import { Loading } from "./components/Loading";
import useFetchData from "./hooks/useFetchData";
import EurModel from "./model/EurModel";
import Home from "./view/Home";
import EurViewModel from "./viewModel/EurViewModel";

export const App = () => {
  const eurData = useFetchData();
  const { isReady } = eurData;

  const model = new EurModel(eurData.eurData);
  const viewModel = new EurViewModel(model);

  return (
    <Div className='App'>
      {isReady ? <Home viewModel={viewModel} /> : <Loading />}
    </Div>
  );
};

const Div = styled.div`
  width: 95vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default App;
