import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    message: 'testing'
  }

  render() {
    return (
      <div>
        HELLLLOOOO???
        {this.state.message}
      </div>
    )
  }
}

export default Home;