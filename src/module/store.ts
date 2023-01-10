import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './index';

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;