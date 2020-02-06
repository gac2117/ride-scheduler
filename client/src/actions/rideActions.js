import { GET_RIDES, ADD_RIDE, DELETE_RIDE, RIDES_LOADING } from './types';

export const getRides = () => {
  return {
    type: GET_RIDES
  };
};

export const deleteRide = id => {
  return {
    type: DELETE_RIDE,
    payload: id
  };
};

export const addRide = ride => {
  return {
    type: ADD_RIDE,
    payload: ride
  };
};

export const setRidesLoading = () => {
  return {
    type: RIDES_LOADING
  };
};
