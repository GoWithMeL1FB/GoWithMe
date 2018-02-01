import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

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