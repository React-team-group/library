import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer as booksReducer } from './books/reducer';
import { reducer as authReducer } from './login/reducer';

const reducers = combineReducers({ books: booksReducer, auth: authReducer });

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
