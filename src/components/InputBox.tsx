import {onChangeInput, exchangeEurToKrw} from '../viewModel/functions'
import { inputPropsType } from '../types/types'

const InputBox = (props: inputPropsType) => {
  const {setInputValue, inputValue, eurInfo} = props
  return (
    <>
    <input
        type='number'
        placeholder="금액을 입력해주세요"
        onChange={(e)=>onChangeInput(e, setInputValue)}
      />{" "}
      유로 ▶︎ <input disabled value={exchangeEurToKrw(inputValue, eurInfo)}/> 원
    </>
  )
}

export default InputBox