import ViewModel from '../ViewModel/ViewModel';

interface Props {
  viewModel: ViewModel;
}

const EurInfo = ({ viewModel }: Props) => {
  const { eurInfo, updownMark, changeRate } = viewModel.getAllEurInfo();
  const {
    basePrice,
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
        {basePrice}원{updownMark}
        {changePrice}원 ({changeRate}%)
      </div>
      <div>
        <div>살때 : {cashBuyingPrice}원</div>
        <div>팔때 : {cashSellingPrice}원</div>
        <div>보낼때 : {ttSellingPrice}원</div>
        <div>받을때 : {ttBuyingPrice}원</div>
      </div>
    </>
  );
};

export default EurInfo;
