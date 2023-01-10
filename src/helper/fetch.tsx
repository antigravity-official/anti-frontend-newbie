const getEurInfo = async (
  setEurInfo: React.Dispatch<React.SetStateAction<boolean>>,
  setReady: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const krweur = await fetch(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  )
    .then((response) => response.json())
    .then((array) => array[0]);

  setEurInfo(krweur);
  setReady(true);
};

export default getEurInfo;
