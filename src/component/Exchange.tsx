import { ChangeEventHandler, useEffect, useState } from "react";
import Info from "./Info";

const Exchange = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<any>({});
  const [result, setResult] = useState<number>(0);
  const [stopInput, setStopInput] = useState<boolean>(false);

  const getEurInfo = async () => {
    setReady(true);
    try {
      const krweur = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR")
        .then((response) => response.json())
        .then((array) => array[0]);
      setEurInfo(krweur);
    } catch {
      setError(true);
    }
    setReady(false);
  };

  const exchangeEurToKrw: ChangeEventHandler<HTMLInputElement> = (e) => {
    setResult(Number(e.currentTarget.value) * eurInfo.basePrice);
    if (e.currentTarget.value.includes(".")) {
      if (e.currentTarget.value.split(".")[1].length > 2) {
        setStopInput(true);
        setTimeout(() => {
          setStopInput(false);
        }, 2000);
      }
    }
  };

  const eurToKrw: string = Math.floor(result)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    getEurInfo();
  }, []);

  let content = <Info data={eurInfo} />;

  if (error) {
    content = <p>알 수 없는 오류가 발생하였습니다. 잠시 후 다시 접속해주세요.</p>;
  }

  if (isReady) {
    content = <p>로딩 중 입니다...</p>;
  }

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      {content}
      <hr />
      <input onChange={exchangeEurToKrw} disabled={stopInput} type="number" /> 유로 ▶︎ <input disabled value={eurToKrw} /> 원
      {stopInput && <div>유로화는 소수점 2자리까지만 입력이 가능합니다.</div>}
    </div>
  );
};
export default Exchange;
