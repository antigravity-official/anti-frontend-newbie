import useFetchData from "./hooks/useFetchData";
import EurModel from "./model/EurModel";
import Home from "./pages/Home";
import EurViewModel from "./viewModel/EurViewModel";

export const App = () => {
  const eurData = useFetchData();
  const model = new EurModel(eurData.eurData);
  const viewModel = new EurViewModel(model);

  // if (!isReady) return null;
  return (
    <div className='App'>
      <Home viewModel={viewModel} />
      {/* <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원 */}
    </div>
  );
};

export default App;
