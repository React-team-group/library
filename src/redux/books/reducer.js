import { GET_BOOKS } from './actionTypes';

const initialState = {
  products: [],
  total: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      console.log('reducer',action.payload);
      return {
        ...state,
        products: [...state.products, ...action.payload.books],
        total: action.payload.total,
      };
    default:
      return state;
  }
};
