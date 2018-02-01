import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../global/Navbar/Navbar.jsx';
import Footer from '../global/Footer/Footer.jsx';
import Sidebar from '../global/Sidebar/Sidebar.jsx';

class Home extends Component {

  render() {
    return (
    <div>
      <Nav />
      <Sidebar />
      {/* <Footer /> */}
    </div>
    )
  }
}

export default Home;