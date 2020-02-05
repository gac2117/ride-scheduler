import { GET_RIDES, ADD_RIDE, DELETE_RIDE } from './types';

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
