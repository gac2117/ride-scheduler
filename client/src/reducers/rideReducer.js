import uuid from 'uuid';
import { GET_RIDES, ADD_RIDE, DELETE_RIDE } from '../actions/types';

const initialState = {
  rides: [
    {
      id: uuid(),
      location: 'School',
      date: '2020-02-20',
      riderName: 'Joelle',
      time: '11AM'
    },
    {
      id: uuid(),
      location: 'Church',
      date: '2020-02-10',
      riderName: 'Caleb',
      time: '11:30'
    },
    {
      id: uuid(),
      location: 'Home',
      date: '2020-02-15',
      riderName: 'Isaiah',
      time: '1:30pm'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES:
      return {
        ...state
      };
    case DELETE_RIDE:
      return {
        ...state,
        rides: state.rides.filter(ride => ride.id !== action.payload)
      };
    default:
      return state;
  }
}
