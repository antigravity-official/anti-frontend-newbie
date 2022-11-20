import { useState, useEffect } from "react";
import { Response } from "./type/index";
import Container from "./view/Container";

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [eurInfo, setEurInfo] = useState<null | Response>(null);

  const getEurInfo = async () => {
    setIsLoading(true);
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setTimeout(() => {
      setIsLoading((loading) => !loading);
    }, 1000);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (isLoading) return <div>"로딩중입니다</div>;

  return (
    <div className="App">
      <h1>환율기준 (1 유로)</h1>
      {eurInfo && <Container eurInfo={eurInfo} />}
    </div>
  );
};

export default App;
