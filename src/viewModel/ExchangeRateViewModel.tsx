import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { ExchangeContext } from '../context/exchangerate-context'

import useFormatting from '../hooks/useFormatting'

import ExchangeRateBoard from '../components/ExchangeRateList/ExchangeRateList'
import ExchangeInput from '../components/ExchangeInput/ExchangeInput'

import styles from './wrapper.module.scss'
import Loading from '../components/Loading/Loading'

const ExchangeRateViewModel = () => {
  const [eur, setEur] = useState<string>()
  const [krw, setKrw] = useState<string>()

  const exchangeData = useContext(ExchangeContext).data
  const loading = useContext(ExchangeContext).isFetching

  const data = useFormatting(exchangeData)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEur(e.target.value)
  }

  useEffect(() => {
    if (eur && exchangeData.basePrice) {
      setKrw(
        (Number(eur) * exchangeData.basePrice).toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      )
    }
  }, [exchangeData?.basePrice, eur])

  if (loading)
    return (
      <div className={styles.wrapper}>
        <Loading />
      </div>
    )

  return (
    <div className={styles.wrapper}>
      <ExchangeRateBoard data={data} />
      <ExchangeInput krw={krw} onChangeInput={onChangeInput} eur={eur} />
    </div>
  )
}

export default ExchangeRateViewModel
