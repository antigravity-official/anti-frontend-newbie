import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import getEurInfo from "./helper/fetch";
import CurrInfo from './components/CurrInfo';

export const App: React.FC = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});
  const [inputValue, setInputValue] = useState<number>(0);

  const exchangeEurToKrw = (krw: any) => (krw * eurInfo.basePrice).toLocaleString('ko-kr');
  
  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.includes('.')){
      let idx = e.target.value.indexOf('.')
      let length = e.target.value.slice(idx+1).length
      if(length > 2){
        e.target.value = (Math.floor(Number(e.target.value) * 100) / 100).toString()
      }
    }
    setInputValue(Number(e.target.value))
  }

  useEffect(() => {
    getEurInfo(setEurInfo, setReady);
    return () => {};
  }, []);

  if (!isReady) {
    return <Loading />;
  }
  return (
    <div className="App">
      <CurrInfo eurInfo={eurInfo}/>
      <hr />
      <input
        type='number'
        placeholder="금액을 입력해주세요"
        onChange={(e)=>onChangeInput(e)}
      />{" "}
      유로 ▶︎ <input disabled value={exchangeEurToKrw(inputValue)} /> 원
    </div>
  );
};

export default App;
