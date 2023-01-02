import { getExchangeInfo } from "./api/exchange";
import ExchangeInfoPage from "./component/page/ExchangeInfoPage";

export const App = () => {
  return (
    <div className="App">
      <ExchangeInfoPage
        getExchangeInfo={() => getExchangeInfo("FRX.KRWEUR")}
        currencyInKorean="유로"
      />
    </div>
  );
};

export default App;
