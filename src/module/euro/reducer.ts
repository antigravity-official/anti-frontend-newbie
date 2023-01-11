import { createReducer } from 'typesafe-actions';
import { EuroState, EuroAction } from './type';
import { GET_EURO_INFO, GET_EURO_INFO_SUCCESS, GET_EURO_INFO_ERROR } from './action';

const initialState: EuroState = {
  euroInfo: {
    loading: false,
    error: null,
    data: null
  }
};

const euro = createReducer<EuroState, EuroAction>(initialState, {
  [GET_EURO_INFO]: state => ({
    ...state,
    euroInfo: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_EURO_INFO_SUCCESS]: (state, action) => ({
    ...state,
    euroInfo: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_EURO_INFO_ERROR]: (state, action) => ({
    ...state,
    euroInfo: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default euro;