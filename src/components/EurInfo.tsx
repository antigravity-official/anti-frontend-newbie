import ViewModel from '../ViewModel/ViewModel';

interface Props {
  viewModel: ViewModel;
}

const EurInfo = ({ viewModel }: Props) => {
  const { eurInfo, changePercent } = viewModel.getEurInfo();
  const {
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = eurInfo;

  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {basePrice}
        {basePrice - openingPrice > 0 && '▲'}
        {basePrice - openingPrice < 0 && '▼'}
        {changePrice}원 ({changePercent}%)
      </div>
      <div>
        <div>살때 : {cashBuyingPrice}</div>
        <div>팔때 : {cashSellingPrice}</div>
        <div>보낼때 : {ttSellingPrice}</div>
        <div>받을때 : {ttBuyingPrice}</div>
      </div>
    </>
  );
};

export default EurInfo;
