import { ExchangeInfo } from "../../typing";

const BASE_URL = process.env.REACT_APP_EXCHANGE_RATE_URL;

const fetchExchangeInfo: (country: string) => Promise<ExchangeInfo> = (
  country: string
) => {
  return fetch(`${BASE_URL}${country}`)
    .then((response) => response.json())
    .then((array) => array[0]);
};

export default fetchExchangeInfo;
