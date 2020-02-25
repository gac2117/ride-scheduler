import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRides } from '../../actions/rideActions';
import PropTypes from 'prop-types';
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Modal,
  ModalBody,
  ModalHeader,
  NavLink
} from 'reactstrap';

class MyRides extends Component {
  state = {
    modal: false
  };

  static propTypes = {
    getRides: PropTypes.func.isRequired,
    ride: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getRides();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { rides } = this.props.ride;
    const { driver } = this.props.auth;
    return (
      <div>
        <NavLink onClick={this.toggle} href='#'>
          My Rides
        </NavLink>
        <Container>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>My Rides</ModalHeader>
            <ModalBody>
              <ListGroup>
                {rides
                  .filter(ride => ride.driver === driver.id)
                  .map(
                    ({
                      _id,
                      riderName,
                      origin,
                      destination,
                      date,
                      time,
                      driver
                    }) => (
                      <ListGroupItem key={_id}>
                        <ListGroupItemHeading>{riderName}</ListGroupItemHeading>
                        <ListGroupItemText>
                          From {origin} to {destination} on {date} at {time}
                        </ListGroupItemText>
                      </ListGroupItem>
                    )
                  )}
              </ListGroup>
            </ModalBody>
          </Modal>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ride: state.ride,
  auth: state.auth
});

export default connect(mapStateToProps, { getRides })(MyRides);
