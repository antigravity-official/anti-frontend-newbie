import axios from 'axios';
const url =
  'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR';

const fetchEuroData = async () => {
  const krweur = await axios.get(url).then((res) => res.data[0]);
  return krweur;
};

export default fetchEuroData;
