import { ChangeEventHandler } from 'react'

import styles from './exchangeInput.module.scss'

interface propsType {
  krw: undefined | string
  eur: undefined | string
  onChangeInput: ChangeEventHandler<HTMLInputElement>
}

const ExchangeInput = (props: propsType) => {
  const { krw, eur, onChangeInput } = props

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor='eur'>유로</label>
      <input
        id='eur'
        className={styles.eurInput}
        type='number'
        value={eur || ''}
        onChange={onChangeInput}
      />
      <label htmlFor='krw'>원</label>
      <input id='krw' className={styles.krwInput} value={krw || ''} disabled />
    </div>
  )
}

export default ExchangeInput
