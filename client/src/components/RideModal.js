import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addRide } from '../actions/rideActions';
import uuid from 'uuid';

class RideModal extends Component {
  state = {
    modal: false,
    riderName: '',
    location: '',
    date: '',
    time: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newRide = {
      id: uuid(),
      riderName: this.state.riderName,
      location: this.state.location,
      date: this.state.date,
      time: this.state.time
    };

    // Add ride via addRide action
    this.props.addRide(newRide);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          I need a ride
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Ride Details</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='riderName'
                  id='name'
                  placeholder='Name of Rider'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='location'>Location</Label>
                <Input
                  type='text'
                  name='location'
                  id='location'
                  placeholder='Name of Location'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='date'>Date</Label>
                <Input
                  type='date'
                  name='date'
                  id='date'
                  placeholder='Date'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='time'>Time</Label>
                <Input
                  type='string'
                  name='time'
                  id='time'
                  placeholder='Time - include AM or PM'
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Add Ride
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ride: state.ride
});

export default connect(mapStateToProps, { addRide })(RideModal);
