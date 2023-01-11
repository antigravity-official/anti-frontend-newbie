import { createAsyncAction } from 'typesafe-actions';
import { EuroInfo } from '../../api/euroInfo';

export const GET_EURO_INFO = 'euro/GET_EURO_INFO';
export const GET_EURO_INFO_SUCCESS = 'euro/GET_EURO_INFO_SUCCESS';
export const GET_EURO_INFO_ERROR = 'euro/GET_EURO_INFO_ERROR';

export const getEuroInfoAsync = createAsyncAction(
    GET_EURO_INFO,
    GET_EURO_INFO_SUCCESS,
    GET_EURO_INFO_ERROR
  )<undefined, EuroInfo, Error>();