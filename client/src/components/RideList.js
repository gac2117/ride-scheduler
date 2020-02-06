import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRides, deleteRide } from '../actions/rideActions';
import PropTypes from 'prop-types';

class RideList extends Component {
  componentDidMount() {
    this.props.getRides();
  }

  onDeleteClick = id => {
    this.props.deleteRide(id);
  };

  render() {
    const { rides } = this.props.ride;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='ride-list'>
            {rides.map(({ _id, riderName, location, date, time }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {riderName} at {location} on {date} at {time}
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={this.onDeleteClick.bind(this, _id)}
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
export default connect(mapStateToProps, { getRides, deleteRide })(RideList);
