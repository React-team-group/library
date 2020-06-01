import { AUTH, EXIT } from './actionTypes';

export const auth = () => async (dispatch) => {
  const auth = false;

  dispatch({
    type: AUTH,
    payload: auth,
  });
};

export const exit = () => async (dispatch) => {
  const auth = false;

  dispatch({
    type: EXIT,
    payload: auth,
  });
};
