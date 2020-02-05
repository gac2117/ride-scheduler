import uuid from 'uuid';
import { GET_RIDES, ADD_RIDE, DELETE_RIDE } from '../actions/types';

const initialState = {
  rides: [
    {
      id: uuid(),
      location: 'School',
      date: '2020-02-20',
      riderName: 'Joelle'
    },
    {
      id: uuid(),
      location: 'Church',
      date: '2020-02-10',
      riderName: 'Caleb'
    },
    { id: uuid(), location: 'Home', date: '2020-02-15', riderName: 'Isaiah' }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES:
      return {
        ...state
      };
    default:
      return state;
  }
}
