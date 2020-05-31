import { AUTH } from './actionTypes';

export const auth = () => async (dispatch) => {
  const auth = false;

  dispatch({
    type: AUTH,
    payload: auth,
  });
};
