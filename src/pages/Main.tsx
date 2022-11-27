import useEurInfo from '../hooks/useEurInfo';

const Main = () => {
  const { eurInfo, error } = useEurInfo();

  // const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  console.log(eurInfo);

  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {/* {eurInfo.basePrice} */}
        {/* {eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%) */}
      </div>
      <div>
        {/* <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div> */}
      </div>
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원
    </>
  );
};

export default Main;
