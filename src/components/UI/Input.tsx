import React from 'react'

function Result({input, handleChange}: {input: string, handleChange: (e: any) => void}) {
  
  console.log('Input')

  return (
    <>
      <label htmlFor="유로">유로</label>
      <input id="유로"onChange={handleChange} placeholder='0' type="text" value={input} /> 원화 ▶︎ 
    </>

  )
}

export default Result