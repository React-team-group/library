import { GET_BOOKS, GET_BOOK_BY_ID, CLEAR_BOOKS, SEARCH_BOOKS, GET_REPLACE_BOOKS } from './actionTypes';

const initialState = {
  products: [],
  book: {},
  total: 0,
  searchStr: '',
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
    case CLEAR_BOOKS:
      return {
        ...state,
        products: [],
      };
    case SEARCH_BOOKS:
      console.log(action.payload);
      return {
        ...state,
        searchStr: action.payload,
      };
    case GET_REPLACE_BOOKS:
      return {
        ...state,
        products: action.payload.books,
        total: action.payload.total,
      };

    default:
      return state;
  }
};
