import ExchangeInfoPage from "./view/component/page/ExchangeInfoPage";

export const App = () => {
  return (
    <div className="App">
      <ExchangeInfoPage fromCurrencyCode="EUR" toCurrencyCode="KRW" />
    </div>
  );
};

export default App;
