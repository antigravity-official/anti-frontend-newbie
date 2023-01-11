import { ChangeEventHandler } from 'react'

interface propsType {
  krw: undefined | string
  eur: undefined | string
  onChangeInput: ChangeEventHandler<HTMLInputElement>
}

const ExchangeInput = (props: propsType) => {
  const { krw, eur, onChangeInput } = props

  return (
    <>
      <input value={eur || ''} onChange={onChangeInput} /> 유로 ▶︎{' '}
      <input value={krw || ''} disabled /> 원
    </>
  )
}

export default ExchangeInput
