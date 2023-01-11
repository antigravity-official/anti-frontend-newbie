import { ChangeEvent, useContext, useEffect, useMemo, useState } from 'react'

import { ExchangeContext } from './context/exchangerate-context'
import { IexchangeRate } from './types/data.d'

import ExchangeRateBoard from './components/ExchangeRateList'
import ExchangeInput from './components/ExchangeInput'

const ExchangeRateViewModel = () => {
  const exchangeData = useContext(ExchangeContext).data
  const loading = useContext(ExchangeContext).isFetching

  const [eur, setEur] = useState<string>()
  const [krw, setKrw] = useState<string>()
  const [data, setData] = useState<IexchangeRate>()
  const options = useMemo(() => ({ maximumFractionDigits: 0 }), [])

  useEffect(() => {
    setData({
      basePrice: exchangeData?.basePrice.toLocaleString('ko-KR', {
        maximumFractionDigits: 0,
      }),
      changePrice: exchangeData?.changePrice.toLocaleString('ko-KR', options),
      cashBuyingPrice: exchangeData?.cashBuyingPrice.toLocaleString('ko-KR', options),
      cashSellingPrice: exchangeData?.cashSellingPrice.toLocaleString('ko-KR', options),
      ttSellingPrice: exchangeData?.ttSellingPrice.toLocaleString('ko-KR', options),
      ttBuyingPrice: exchangeData?.ttBuyingPrice.toLocaleString('ko-KR', options),
      changeRate: Number(exchangeData?.basePrice) - Number(exchangeData?.openingPrice),
      rate: (Number(exchangeData?.changePrice) / Number(exchangeData?.basePrice)) * 100,
    })
  }, [exchangeData, options])

  useEffect(() => {
    if (eur && exchangeData.basePrice) {
      setKrw(
        (Number(eur) * exchangeData.basePrice).toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      )
    }
  }, [exchangeData?.basePrice, eur])

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEur(e.target.value)
  }

  if (loading) return <div>로딩..</div>

  return (
    <>
      <ExchangeRateBoard data={data} />
      <ExchangeInput krw={krw} onChangeInput={onChangeInput} eur={eur} />
    </>
  )
}

export default ExchangeRateViewModel
