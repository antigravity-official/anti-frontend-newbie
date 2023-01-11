import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { ExchangeContext } from './context/exchangerate-context'

import ExchangeInput from './components/ExchangeInput'

const ExchangeRateViewModel = () => {
  const exchangeData = useContext(ExchangeContext).data
  const [eur, setEur] = useState<string>()
  const [krw, setKrw] = useState<string>()

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

  return <ExchangeInput krw={krw} onChangeInput={onChangeInput} eur={eur} />
}

export default ExchangeRateViewModel
