import {
  GET_RIDES,
  ADD_RIDE,
  DELETE_RIDE,
  RIDES_LOADING
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
        rides: state.rides.filter(ride => ride.id !== action.payload)
      };
    case ADD_RIDE:
      return {
        ...state,
        rides: [action.payload, ...state.rides]
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
