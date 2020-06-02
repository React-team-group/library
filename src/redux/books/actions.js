import { GET_BOOKS, GET_BOOK_BY_ID, CLEAR_BOOKS, SEARCH_BOOKS, GET_REPLACE_BOOKS } from './actionTypes';
import { HttpService } from '../../api/api';

export const requestBooks = (search, page, limit) => async (dispatch) => {
  const books = await HttpService.getProducts(search, page, limit);
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

export const bookByID = (id) => async (dispatch) => {
  const book = await HttpService.getProductId(id);
  dispatch({
    type: GET_BOOK_BY_ID,
    payload: book,
  });
};

export const clearBooks = () => (dispatch) => {
  dispatch({
    type: CLEAR_BOOKS,
  });
};

export const search = (text) => (dispatch) => {
  console.log(text);
  dispatch({
    type: SEARCH_BOOKS,
    payload: text,
  });
};

export const replaceBooks = (search, page, limit) => async (dispatch) => {
  const books = await HttpService.getProducts(search, page, limit);
  dispatch({
    type: GET_REPLACE_BOOKS,
    payload: books,
  });
};
