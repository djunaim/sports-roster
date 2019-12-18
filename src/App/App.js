import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavbar/MyNavbar';


function App() {
  return (
    <div className="App">
        <button className="btn btn-danger">Boo</button>
        <MyNavbar />
    </div>
  );
}

export default App;
