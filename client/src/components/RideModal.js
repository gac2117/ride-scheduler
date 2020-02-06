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
import moment from 'moment';

class RideModal extends Component {
  state = {
    modal: false,
    riderName: '',
    origin: '',
    destination: '',
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
      riderName: this.state.riderName,
      origin: this.state.origin,
      destination: this.state.destination,
      date: moment(this.state.date).format('MMMM D, YYYY'),
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
          color='primary'
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
                <Label for='origin'>From</Label>
                <Input
                  type='text'
                  name='origin'
                  id='origin'
                  placeholder='Name of Location'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='destination'>To</Label>
                <Input
                  type='text'
                  name='destination'
                  id='destination'
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
                  type='text'
                  name='time'
                  id='time'
                  placeholder='Time - include AM or PM'
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color='primary' style={{ marginTop: '2rem' }} block>
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
