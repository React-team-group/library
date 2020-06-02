import { AUTH } from './actionTypes';

const initialState = {
  isLogged: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        isLogged: action.payload,
      };
    default:
      return state;
  }
};
