import useEuroInfoViewModel from './EuroInfoViewModel';
import Loading from '../Loading/Loading';
import styles from './EuroInfoView.module.css';

export default function EuroInfoView() {
  const { euro, eurInfo, error, isLoading, isFetching, krw, onChange } =
    useEuroInfoViewModel();

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const isHigherBasePrice =
    eurInfo && eurInfo.basePrice - eurInfo.openingPrice > 0;

  return (
    <>
      {eurInfo && (
        <div className={styles.info}>
          <h1>환율기준 (1 유로)</h1>
          <h2>
            {eurInfo.basePrice}
            <span
              className={`${styles.gap} ${
                isHigherBasePrice ? styles.higher : styles.lower
              }`}
            >
              <span>
                {isHigherBasePrice ? '▲' : '▼'}
                {eurInfo.changePrice}원
              </span>
              ({((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
            </span>
          </h2>
          <ul className={styles.exchange}>
            <li>살때 : {eurInfo.cashBuyingPrice}</li>
            <li>팔때 : {eurInfo.cashSellingPrice}</li>
            <li>보낼때 : {eurInfo.ttSellingPrice}</li>
            <li>받을때 : {eurInfo.ttBuyingPrice}</li>
          </ul>
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
