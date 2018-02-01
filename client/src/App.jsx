import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/index.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>       
        <Home />
      </div>
    )
  }
}

export default App;