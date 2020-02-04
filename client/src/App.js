import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import RideList from './components/RideList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <AppNavbar />
      <RideList />
    </div>
  );
}

export default App;
