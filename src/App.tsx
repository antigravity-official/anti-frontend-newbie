import EurInfo from "./components/eurInfo";
import Exchange from "./components/exchange";
import useHandleStates from "./utils/useHandleStates";

export const App = () => {
  const { isReady, eurInfo, onChange, exchangePrice } = useHandleStates();

  return (
    <div className="App">
      <EurInfo isReady={isReady} eurInfo={eurInfo} />
      <hr />
      <Exchange onChange={onChange} exchangePrice={exchangePrice} />
    </div>
  );
};

export default App;
