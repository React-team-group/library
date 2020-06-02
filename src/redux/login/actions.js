import { AUTH } from './actionTypes';

export const auth = (flag) => (dispatch) => {
  dispatch({
    type: AUTH,
    payload: flag,
  });
};

