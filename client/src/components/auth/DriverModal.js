import React, { Component } from 'react';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class DriverModal extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    // if authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // create new driver
    const newDriver = {
      name,
      email,
      password
    };

    this.props.register(newDriver);
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href='#'>
          Sign Up
        </NavLink>
        <Container>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
            <ModalBody>
              {this.state.msg ? (
                <Alert color='danger'>{this.state.msg}</Alert>
              ) : null}
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for='name'>Name</Label>
                  <Input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name of Driver'
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='email'>Email Address:</Label>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='password'>Password</Label>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    onChange={this.onChange}
                  />
                </FormGroup>
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Submit
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(DriverModal);
