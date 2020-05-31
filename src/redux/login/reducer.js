import { AUTH } from './actionTypes';

const initialState = {
  isLogged: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        isLogged: true,
      };
    default:
      return state;
  }
};
