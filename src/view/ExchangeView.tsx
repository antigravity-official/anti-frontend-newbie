import { ViewModelProps } from "../@types/ViewModelProps";
import Loading from "./Loading";

export const ExchangeView = ({ viewModel }: ViewModelProps) => {
  const eurInfo = viewModel.eurInfo;
  if (!viewModel.isReady || !eurInfo) return <Loading />;
  return (
    <div>
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
      <input
        type="text"
        onChange={viewModel.exchangeEurToKrw}
        value={viewModel.eur}
      />
      유로 ▶︎ <input disabled value={viewModel.Krw} /> 원
    </div>
  );
};

export default ExchangeView;
