import { GET_BOOKS, GET_BOOK_BY_ID } from './actionTypes';

const initialState = {
  products: [],
  book: {},
  total: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        products: [...state.products, ...action.payload.books],
        total: action.payload.total,
      };
    case GET_BOOK_BY_ID:
      return {
        ...state,
        book: { ...action.payload },
      };
    default:
      return state;
  }
};
