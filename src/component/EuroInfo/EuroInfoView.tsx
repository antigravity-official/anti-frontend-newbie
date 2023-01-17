import useEuroInfoViewModel from './EuroInfoViewModel';

export default function EuroInfoView() {
  const { euro, eurInfo, isLoading, isFetching, krw, onChange } =
    useEuroInfoViewModel();

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {eurInfo && (
        <div className='App'>
          <div>환율기준 (1 유로)</div>
          <div>
            {eurInfo.basePrice}
            {eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
            {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
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
          <input
            type='text'
            placeholder='0'
            value={euro}
            onChange={onChange}
          />{' '}
          유로 ▶︎ <input disabled value={krw} /> 원
        </div>
      )}
    </>
  );
}
