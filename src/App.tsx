import ExchangeInfoPage from "./component/page/ExchangeInfoPage";

export const App = () => {
  return (
    <div className="App">
      <ExchangeInfoPage fromCurrencyCode="EUR" toCurrencyCode="KRW" />
    </div>
  );
};

export default App;
