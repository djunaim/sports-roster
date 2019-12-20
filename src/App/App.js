import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';
import Team from '../components/Team/Team';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount = () => {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount = () => {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
    <div className="App">
      <MyNavbar authed={authed} />
      {
        (authed) ? (<Team/>)
          : (<Auth/>)
      }
    </div>
    );
  }
}

export default App;
