import axios from 'axios';
import {
  GET_RIDES,
  ADD_RIDE,
  DELETE_RIDE,
  RIDES_LOADING,
  ADD_DRIVER
} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getRides = () => dispatch => {
  dispatch(setRidesLoading());
  axios
    .get('/api/rides')
    .then(res =>
      dispatch({
        type: GET_RIDES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addRide = ride => dispatch => {
  axios
    .post('/api/rides', ride)
    .then(res =>
      dispatch({
        type: ADD_RIDE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addDriver = id => (dispatch, getState) => {
  axios
    .put(`/api/rides/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_DRIVER,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteRide = id => (dispatch, getState) => {
  axios
    .delete(`/api/rides/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_RIDE,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setRidesLoading = () => {
  return {
    type: RIDES_LOADING
  };
};
