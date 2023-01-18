import { Currency, ExchangeInfo } from "../../typing";

const BASE_URL = process.env.REACT_APP_EXCHANGE_RATE_URL;

const fetchExchangeInfo: (currency: Currency) => Promise<ExchangeInfo> = (
  currency
) => {
  return fetch(`${BASE_URL}${currency}`)
    .then((response) => response.json())
    .then((array) => array[0]);
};

export default fetchExchangeInfo;
