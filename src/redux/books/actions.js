import { GET_BOOKS, GET_BOOK_BY_ID } from './actionTypes';
import { HttpService } from '../../api/api';

export const requestBooks = (page, limit) => async (dispatch) => {
  const books = await HttpService.getProducts(page, limit);
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
