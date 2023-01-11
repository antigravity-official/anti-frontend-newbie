import { apiTypes } from "../types/types";

// Model
const getEurInfo = async (
  setEurInfo: React.Dispatch<React.SetStateAction<Record<string, never> | apiTypes>>,
  setReady: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const krweur = await fetch(
    process.env.REACT_APP_API_KEY!
  )
    .then((response) => response.json())
    .then((array) => array[0]);

  setEurInfo(krweur);
  setReady(true);
};

export default getEurInfo;
