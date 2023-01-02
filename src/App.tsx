import { getExchangeInfo } from "./api/exchange";
import ExchangeInfoPage from "./component/page/ExchangeInfoPage";

export const App = () => {
  return (
    <div className="App">
      <ExchangeInfoPage
        getExchangeInfo={() => getExchangeInfo("FRX.KRWEUR")}
        fromCurrencyCode="EUR"
        toCurrencyCode="KRW"
      />
    </div>
  );
};

export default App;
