import React from 'react';
import axios from 'axios';
import { DropTarget } from 'react-drag-drop-container';

class DropBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateCourse: []
    };
  }

  saveDateCourse() {

  }

  render () {
    return(
      <div>
        <button onClick={() => {console.log('hi')}}>Save</button>
      </div>
    )
  }
}

export default DropBox;