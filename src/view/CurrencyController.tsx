import React, { useState } from 'react'
import { TCurrency } from '../types'
import { isLimitDecimal } from '../util'
import CurrencyView from './CurrencyView'
import CurrencyViewModel from './CurrencyViewModel'

function CurrencyController({data}: {data: TCurrency}) {
  const [viewModel] = useState(new CurrencyViewModel(data))
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let input = e.target.value;
      if(isLimitDecimal(input)) return;
      return setValue(e.target.value);
  }

  return (
    <CurrencyView viewModel={viewModel} handleChange={handleChange} value={value}/>
  )
}

export default CurrencyController