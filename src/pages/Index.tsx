import CurrInfo from "../components/CurrInfo";
import InputBox from "../components/InputBox";
import { inputPropsType } from "../types/types";

export const Index = (props: inputPropsType) => {
  const {eurInfo, inputValue, setInputValue} = props
  return (
    <div className="App">
      <CurrInfo eurInfo={eurInfo} />
      <hr />
      <InputBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        eurInfo={eurInfo}
      />
    </div>
  );
};

export default Index;
