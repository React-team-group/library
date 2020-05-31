import { GET_BOOKS } from './actionTypes';
import { HttpService } from '../../api/api';

export const requestBooks = (page, limit) => async (dispatch) => {
  const books = await HttpService.getProducts(page, limit);

  dispatch({
    type: GET_BOOKS,
    payload: books.data,
  });
};