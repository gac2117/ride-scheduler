import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import RideList from './components/RideList';
import RideModal from './components/RideModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadDriver } from './actions/authActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadDriver());
  }
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <RideModal />
            <RideList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
