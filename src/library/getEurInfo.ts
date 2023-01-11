import axios from "axios";

export const getEurInfo = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}`);
  return data[0];
};
