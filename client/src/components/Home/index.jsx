import React, { Component } from 'react';
import axios from 'axios';
// import '../../../public/css/materialize.css'
import Nav from '../global/Nav/Nav.jsx';
import Footer from '../global/Footer/Footer.jsx';
import Sidebar from '../global/Sidebar/Sidebar.jsx';

class Home extends Component {

  render() {
    return (
      <div >
        <Nav />
        {/* <Sidebar /> */}
        <h1> Welcome Home! </h1>
      </div>
    )
  }
}

export default Home;