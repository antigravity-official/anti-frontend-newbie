import { IexchangeRate } from '../types/data.d'

interface propsType {
  data: IexchangeRate | undefined
}

const ExchangeRateBoard = (props: propsType) => {
  const { data } = props

  return (
    <>
      <div>환율기준 (1 유로)</div>
      {data?.basePrice} 원
      <div>
        {data?.rate && data?.rate > 0 ? '▲' : '▼'}
        {data?.changePrice}원 {data?.changeRate}%
      </div>
      <div>
        <div>살때 : {data?.cashBuyingPrice} 원</div>
        <div>팔때 : {data?.cashSellingPrice} 원</div>
        <div>보낼때 : {data?.ttSellingPrice} 원</div>
        <div>받을때 : {data?.ttBuyingPrice}원 </div>
      </div>
    </>
  )
}

export default ExchangeRateBoard
