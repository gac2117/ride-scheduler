import { combineReducers } from 'redux';
import rideReducer from './rideReducer';

export default combineReducers({
  ride: rideReducer
});
