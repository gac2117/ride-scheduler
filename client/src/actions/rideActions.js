import axios from 'axios';
import { GET_RIDES, ADD_RIDE, DELETE_RIDE, RIDES_LOADING } from './types';

export const getRides = () => dispatch => {
  dispatch(setRidesLoading());
  axios.get('/api/rides').then(res =>
    dispatch({
      type: GET_RIDES,
      payload: res.data
    })
  );
};

export const addRide = ride => dispatch => {
  axios.post('/api/rides', ride).then(res =>
    dispatch({
      type: ADD_RIDE,
      payload: res.data
    })
  );
};

export const deleteRide = id => dispatch => {
  axios.delete(`/api/rides/${id}`).then(res =>
    dispatch({
      type: DELETE_RIDE,
      payload: id
    })
  );
};

export const setRidesLoading = () => {
  return {
    type: RIDES_LOADING
  };
};
