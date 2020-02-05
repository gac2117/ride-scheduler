import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import RideList from './components/RideList';
import RideModal from './components/RideModal';

import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import { Container } from 'reactstrap';

function App() {
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

export default App;
