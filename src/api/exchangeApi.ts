import axios from "axios";

export const exchangeApi = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
});
