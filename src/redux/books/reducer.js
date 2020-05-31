import { GET_BOOKS } from './actionTypes';

const initialState = {
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
