import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class RideList extends Component {
  state = {
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
        <ListGroup>
          <TransitionGroup className='ride-list'>
            {rides.map(({ id, riderName, location, date }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {riderName} at {location} on {date}
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => {
                      this.setState(state => ({
                        rides: state.rides.filter(ride => ride.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default RideList;
