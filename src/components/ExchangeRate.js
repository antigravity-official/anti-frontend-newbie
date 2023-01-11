const ExchangeRate = ({eurInfo, commify}) => {
    return (
      <div>
          <div>환율기준 (1 유로)</div>
          {commify(Math.round(eurInfo.basePrice))}
          {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
          {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
          {commify(Math.round(eurInfo.changePrice))}원 (
          {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
        </div>
    )
  }
  
  export default ExchangeRate;