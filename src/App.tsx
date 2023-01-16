import { useEurState } from "./context/eurCtx";
import { exchangeEurToKrw } from "./utils/exchange";
import { useState } from "react";
import { addComma } from "./utils/addComma";

export const App = () => {
  const { eurInfo, isReady } = useEurState();
  const [exchangePrice, setExchangePrice] = useState(0);
  const [inputEuro, setInputEuro] = useState("");

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEuro(event.target.value);
    if (eurInfo)
      setExchangePrice(exchangeEurToKrw(event.target.value, eurInfo.basePrice));
  };

  if (!isReady) return <div>로딩중</div>;
  if (eurInfo) {
    return (
      <div className="App">
        <div>환율기준 (1 유로)</div>
        <div>
          {eurInfo.basePrice}
          {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
          {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
          {eurInfo.changePrice}원 (
          {((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
        </div>
        <div>
          <div>살때 : {eurInfo.cashBuyingPrice}</div>
          <div>팔때 : {eurInfo.cashSellingPrice}</div>
          <div>보낼때 : {eurInfo.ttSellingPrice}</div>
          <div>받을때 : {eurInfo.ttBuyingPrice}</div>
        </div>
        <hr />
        <input type="number" value={inputEuro} onChange={changeInput} /> 유로 ▶︎{" "}
        <input disabled value={addComma(exchangePrice)} /> 원
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default App;
