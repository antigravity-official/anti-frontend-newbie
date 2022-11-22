import ExchangeView from "./view/ExchangeView";
import "../src/styles/globals.css";
import { useExchangeViewModel } from "./viewModel/useExchangeViewModel";

export const App = () => {
  const ExchangeViewModel = useExchangeViewModel();
  return (
    <>
      <ExchangeView viewModel={ExchangeViewModel} />
    </>
  );
};

export default App;
