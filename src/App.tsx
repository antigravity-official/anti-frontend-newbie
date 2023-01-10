import useFetchData from "./hooks/useFetchData";
import EurModel from "./model/EurModel";
import Home from "./view/Home";
import EurViewModel from "./viewModel/EurViewModel";
import Loading from "./components/Loading";

export const App = () => {
  const eurData = useFetchData();
  const model = new EurModel(eurData.eurData);
  const viewModel = new EurViewModel(model);
  console.log(eurData);

  const { isLoading } = eurData;
  return (
    <div className='App'>
      {isLoading ? <Loading /> : <Home viewModel={viewModel} />}
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
