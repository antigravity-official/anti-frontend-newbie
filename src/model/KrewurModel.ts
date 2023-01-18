import { tkrweurData } from "../_types/krewur";

function KrewurModel() {
  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array: tkrweurData) => array[0])
      .catch((error) => console.log(error));

    return krweur;
  };

  return { getEurInfo };
}

export default KrewurModel;
