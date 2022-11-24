import React, { useState } from 'react'

interface EuroInfo{
  basePrice: number;
}

interface Euro{
  eurInfo:EuroInfo;
  }

const InputExchange = ({eurInfo}:Euro):JSX.Element => {
  const [money,setMoney]=useState(0)
  const exchangeEurToKrw = (krw: number):number => krw * eurInfo.basePrice;
  const exchangedMoney=Math.floor(exchangeEurToKrw(money)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return (
    <div>
       <input 
       type="number"
       value={money||""}
       min={0}
       onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMoney(Number(e.target.value))}
       /> 유로 ▶︎ 
       <input 
       disabled 
       value={money?exchangedMoney:""}
       />
       원
    </div>
  )
}

export default InputExchange