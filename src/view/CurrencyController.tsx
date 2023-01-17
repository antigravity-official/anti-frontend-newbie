import { useState } from 'react'
import { TCurrency } from '../types'
import CurrencyView from './CurrencyView'
import CurrencyViewModel from './CurrencyViewModel'

function CurrencyController({data}: {data: TCurrency}) {
  const [viewModel] = useState(new CurrencyViewModel(data))

  return (
    <CurrencyView viewModel={viewModel} />
  )
}

export default CurrencyController