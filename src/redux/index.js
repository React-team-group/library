import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
