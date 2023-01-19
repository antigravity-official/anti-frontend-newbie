import EurInfoView from "./views/EurInfo";
import ExchangeView from "./views/Exchange";
import { eur, eurInfo, eurInfoLoading } from "./models";

const App = () => {
  let _eur = eur;
  let _eurInfo = eurInfo;
  let _eurInfoLoading = eurInfoLoading;

  return _eurInfoLoading ? (  
    <div className="App">
        <div>환율기준 (1 유로)</div>
        <EurInfoView />
        <hr />
        <ExchangeView />
    </div>
  ) : (
    <h1>환율 정보를 불러오는 중입니다.</h1>
  )
};

export default App;
