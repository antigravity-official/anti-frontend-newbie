import {ExchangeInfo} from "../types/EuroInfoTypes"

interface EuroInfoProps{
  eurInfo:ExchangeInfo
}

const ExchangeRate = ({eurInfo}:EuroInfoProps):JSX.Element => {
  const commafn=(price:number)=> price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return (
    <div>
         <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {commafn(eurInfo.cashBuyingPrice)}</div>
        <div>팔때 : {commafn(eurInfo.cashSellingPrice)}</div>
        <div>보낼때 : {commafn(eurInfo.ttSellingPrice)}</div>
        <div>받을때 : {commafn(eurInfo.ttBuyingPrice)}</div>
      </div>
    </div>
  )
}

export default ExchangeRate