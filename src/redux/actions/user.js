import { UPDATE_USER, FETCH_USER, LOGOUT } from './../actionTypes';
import axios from 'axios';

export const updateUser = user => {
  return dispatch => dispatch({ type: UPDATE_USER, payload: user });
};

export const fetchUser = () => {
  return async dispatch => {
    try {
      const user = await axios.get('/api/users/user');
      if (user.data.error) {
        return;
      }

      dispatch({ type: FETCH_USER, payload: user.data });
    } catch (e) {
      /* handle error */
      console.log(e);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/users/logout');
      if (res.data.error) {
        console.log(res);
        return;
      }

      dispatch({ type: LOGOUT, payload: {} });
    } catch (e) {
      /* handle error */
      console.log(e);
    }
  };
};
