import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRides, deleteRide, addDriver } from '../actions/rideActions';
import PropTypes from 'prop-types';

class RideList extends Component {
  static propTypes = {
    getRides: PropTypes.func.isRequired,
    ride: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getRides();
  }

  onDeleteClick = id => {
    this.props.deleteRide(id);
  };

  onGiveRideClick = (id, driverID) => {
    const giveRide = {
      rideId: id,
      driverId: driverID
    };
    console.log(giveRide);
    this.props.addDriver(giveRide);
  };

  render() {
    const { rides } = this.props.ride;
    const { driver, isAuthenticated } = this.props.auth;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='ride-list'>
            {rides.map(
              ({ _id, riderName, origin, destination, date, time }) => (
                <CSSTransition key={_id} timeout={500} classNames='fade'>
                  <ListGroupItem>
                    <ListGroupItemHeading>{riderName}</ListGroupItemHeading>
                    <ListGroupItemText>
                      From {origin} to {destination} on {date} at {time}
                    </ListGroupItemText>
                    {isAuthenticated ? (
                      <Button
                        className='ride-btn'
                        color='warning'
                        size='md'
                        onClick={this.onGiveRideClick.bind(
                          this,
                          _id,
                          driver._id
                        )}
                      >
                        Give Ride
                      </Button>
                    ) : null}
                    {isAuthenticated ? (
                      <Button
                        className='remove-btn'
                        outline
                        color='danger'
                        size='sm'
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>
                    ) : null}
                  </ListGroupItem>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ride: state.ride,
  auth: state.auth
});
export default connect(mapStateToProps, { getRides, deleteRide, addDriver })(
  RideList
);
