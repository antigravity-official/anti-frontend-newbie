import { combineReducers } from 'redux';
import euro from './euro';

const rootReducer = combineReducers({
  euro
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;