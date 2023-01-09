import React, { ChangeEvent, useEffect, useState } from "react";
import { getEurInfo } from './api/exchange';
import { ExchangeInfo } from './model/Model';
import { ExchangeInput } from './view/component/Info/ExchangeInput';
import { ExchangeTotalInfo } from './view/component/Info/ExchangeTotalInfo';


export const App = () => {
  const [eurInfo, setEurInfo] = useState<ExchangeInfo | undefined>(undefined);
  // const [eurInput, setEurInput] = useState<number>();
  // const [krw, setkrw] = useState<string>('0');


  // const getEurInput = (e :ChangeEvent<HTMLInputElement>) => {
  //     setEurInput(parseFloat(e.target.value));
  // }

  useEffect(() => {
    getEurInfo().then((priceValue) => { setEurInfo(priceValue) });
    return () => {}
  }, []);

  // if(krw == 'NaN') setkrw('0')

  // useEffect(() => {
  //   if (eurInput != undefined && eurInfo?.basePrice) {
  //     let totalPrice :number = Math.ceil(eurInput * eurInfo.basePrice);
  //     setkrw(totalPrice.toLocaleString('ko-KR'));
  //   }

  // },[eurInput]);

  
  if (!eurInfo) return null;
  return (
    <div className="App">
      <ExchangeTotalInfo eurInfo={eurInfo}/>
      <hr />
      <ExchangeInput eurInfo={eurInfo}/>
      {/* <input onChange={getEurInput}/> 유로 ▶︎ <input disabled value={krw}/> 원 */}
    </div>
  );
};

export default App;
