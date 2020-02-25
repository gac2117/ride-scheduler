import {
  GET_RIDES,
  ADD_RIDE,
  DELETE_RIDE,
  RIDES_LOADING,
  ADD_DRIVER
} from '../actions/types';

const initialState = {
  rides: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES:
      return {
        ...state,
        rides: action.payload,
        loading: false
      };
    case DELETE_RIDE:
      return {
        ...state,
        rides: state.rides.filter(ride => ride._id !== action.payload)
      };
    case ADD_RIDE:
      return {
        ...state,
        rides: [action.payload, ...state.rides]
      };
    case ADD_DRIVER:
      const newRides = state.rides.filter(
        ride => ride._id !== action.payload._id
      );
      newRides.push(action.payload);
      return {
        ...state,
        rides: newRides
      };
    case RIDES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
