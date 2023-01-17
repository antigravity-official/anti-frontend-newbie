import { KrwEur } from "../types/krweur";

export const getEurInfo = async () => {
  try {
    const krweur: KrwEur = await fetch(process.env.REACT_APP_API_URL!)
      .then((response) => response.json())
      .then((array) => array[0]);
    return krweur;
  } catch (error) {
    console.log(error);
    throw new Error("실패");
  }
};
