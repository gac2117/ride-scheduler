import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class RideList extends Component {
  state = {
    rides: [
      { id: uuid(), location: 'School', date: Date.now, riderName: 'Joelle' },
      {
        id: uuid(),
        location: 'Church',
        date: 2 / 20 / 2020,
        riderName: 'Caleb'
      },
      { id: uuid(), location: 'Home', date: Date.now, riderName: 'Isaiah' }
    ]
  };

  render() {
    const { rides } = this.state;
    return (
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const riderName = prompt('Enter Name');
            const location = prompt('Enter location');
            const date = prompt('Enter date');
            if (riderName) {
              this.setState(state => ({
                rides: [
                  ...state.rides,
                  { id: uuid(), location, date, riderName }
                ]
              }));
            }
          }}
        >
          Add Ride
        </Button>
      </Container>
    );
  }
}

export default RideList;
