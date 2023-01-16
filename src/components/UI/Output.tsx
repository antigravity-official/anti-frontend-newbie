function Output({value}: {value:string}) {

  return (
    <>
      <label htmlFor="한화">한화</label>
      <input id="한화"disabled type="text" value={value} />
    </>
  )
}

export default Output