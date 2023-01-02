import { getExchangeInfo } from "./api/exchange";
import ExchangeInfoPage from "./component/page/ExchangeInfoPage";

export const App = () => {
  return (
    <div className="App">
      <ExchangeInfoPage
        getExchangeInfo={() => getExchangeInfo("FRX.KRWEUR")}
        fromCurrency="유로"
        toCurrency="원"
      />
    </div>
  );
};

export default App;
