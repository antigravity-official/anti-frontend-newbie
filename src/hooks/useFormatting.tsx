import { useCallback, useEffect, useMemo, useState } from 'react'
import { IexchangeRate } from '../types/data.d'

const useFormatting = (exchangeData: IexchangeRate) => {
  const [data, setData] = useState<IexchangeRate>()

  const options = useMemo(() => ({ maximumFractionDigits: 0 }), [])

  const formattingPrice = useCallback(
    (price: number | string) => {
      if (exchangeData) {
        return price.toLocaleString('ko-KR', options)
      }
      return price
    },
    [exchangeData, options]
  )

  useEffect(() => {
    setData({
      basePrice: formattingPrice(exchangeData?.basePrice),
      changePrice: formattingPrice(exchangeData?.changePrice),
      cashBuyingPrice: formattingPrice(exchangeData?.cashBuyingPrice),
      cashSellingPrice: formattingPrice(exchangeData?.cashSellingPrice),
      ttSellingPrice: formattingPrice(exchangeData?.ttSellingPrice),
      ttBuyingPrice: formattingPrice(exchangeData?.ttBuyingPrice),
      changeRate: Number(exchangeData?.basePrice) - Number(exchangeData?.openingPrice),
      rate: ((Number(exchangeData?.changePrice) / Number(exchangeData?.basePrice)) * 100).toFixed(
        2
      ),
    })
  }, [exchangeData, formattingPrice])

  return data
}

export default useFormatting
