import { AUTH, EXIT } from './actionTypes';

const initialState = {
  isLogged: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        isLogged: true,
      };
    case EXIT:
      return {
        isLogged: false,
      };
    default:
      return state;
  }
};
