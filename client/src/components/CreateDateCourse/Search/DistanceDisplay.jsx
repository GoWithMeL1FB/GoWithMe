import React, { Component } from 'react';

class DistanceDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.test = this.test.bind(this);
  }

  test() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        plz work
        <button onClick={this.test}>test</button>
      </div>
    )
  }
}

export default DistanceDisplay;