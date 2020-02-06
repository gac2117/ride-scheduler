import { combineReducers } from 'redux';
import rideReducer from './rideReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  ride: rideReducer,
  error: errorReducer,
  auth: authReducer
});
