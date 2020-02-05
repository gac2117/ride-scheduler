import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getRides } from '../actions/rideActions';
import PropTypes from 'prop-types';

class RideList extends Component {
  componentDidMount() {
    this.props.getRides();
  }

  render() {
    const { rides } = this.props.ride;
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

RideList.propTypes = {
  getRides: PropTypes.func.isRequired,
  ride: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ride: state.ride
});
export default connect(mapStateToProps, { getRides })(RideList);
