import { GET_RIDES, ADD_RIDE, DELETE_RIDE } from './types';

export const getRides = () => {
  return {
    type: GET_RIDES
  };
};
