import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Datatable } from './lib/Datatable';


function App() {
  const headers = [
    'First name', 'Last name', 'Start Date', 'Department', 'Date of Birth', 'Street', 'City', 'State', 'Zip Code'
  ]

  return (
    <div className="App">
      <Datatable headers={headers}/>
    </div>
  );
}

export default App;
