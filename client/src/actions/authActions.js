import axios from 'axios';
import {
  DRIVER_LOADED,
  DRIVER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';
import { returnErrors } from './errorActions';

// Check token and load driver
export const loadDriver = () => (dispatch, getState) => {
  // Driver loading
  dispatch({ type: DRIVER_LOADING });

  axios
    .get('/api/auth/driver', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DRIVER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localStorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};
