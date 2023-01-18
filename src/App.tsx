import EurInfoView from "./views/EurInfo";
import ExchangeView from "./views/Exchange";

const App = () => {
  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <EurInfoView />
      <hr />
      <ExchangeView />
    </div>
  );
};

export default App;
