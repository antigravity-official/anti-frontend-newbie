import { IexchangeRate } from '../../types/data.d'

import styles from './exchangeRateList.module.scss'

interface propsType {
  data: IexchangeRate | undefined
}

const ExchangeRateBoard = (props: propsType) => {
  const { data } = props

  return (
    <>
      <h1 className={styles.title}>환율기준 (1 유로)</h1>
      <div className={styles.basePrice}>{data?.basePrice} 원</div>
      <div className={styles.rateWrapper}>
        {data?.changeRate && data?.changeRate > 0 ? (
          <span className={styles.up}>▲</span>
        ) : (
          <span className={styles.down}>▼</span>
        )}
        {data?.changePrice}원 {data?.rate}%
      </div>
      <ul className={styles.listWrapper}>
        <ol>살때 : {data?.cashBuyingPrice} 원</ol>
        <ol>팔때 : {data?.cashSellingPrice} 원</ol>
        <ol>보낼때 : {data?.ttSellingPrice} 원</ol>
        <ol>받을때 : {data?.ttBuyingPrice} 원 </ol>
      </ul>
    </>
  )
}

export default ExchangeRateBoard
