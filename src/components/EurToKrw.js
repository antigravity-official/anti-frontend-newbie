const EurToKrw = ({ exchangeEurToKrw, krw, commify }) => {
    if (krw === 0)
      return (
        <div>
          <input onChange={exchangeEurToKrw} /> 유로 ▶︎{" "}
          <input disabled value={" "} />원
        </div>
      );
    return (
      <div>
        <input onChange={exchangeEurToKrw} /> 유로 ▶︎{" "}
        <input disabled value={commify(Math.floor(krw))} />원
      </div>
    );
  };
  
  export default EurToKrw;