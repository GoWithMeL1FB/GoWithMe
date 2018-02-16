import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize';
import swal from 'sweetalert';

import './Nav.css';
// import logo from "../../../../public/assets/logos/gwmfavwhite.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.sweetAlert = this.sweetAlert.bind(this);
  }

  sweetAlert() {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        })
        .then(() => {
          window.location.href = 'http://ec2-52-53-252-145.us-west-1.compute.amazonaws.com:3050';
        })
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  render() {
    return (
      <div>
        <nav className="blue-grey darken-3" role="navigation">
          <div className="nav-wrapper container">
<<<<<<< HEAD
            <a id="logo-container" href="#" className="brand-logo"><img id='brandlogo' src={logo}></img></a>
=======
            <a id="logo-container" href="#" className="brand-logo"><img id='brandlogo' src='/assets/logos/gwmfavwhite.png'></img></a>            
>>>>>>> [fix] image render does not break upon refresh
            <ul className="right">
              <li><Link to="/Home/HomeView"><Icon>home</Icon></Link></li>
              <li><Link to="/Home/createDateCourse"><Icon>event_note</Icon></Link></li>
              <li><Link to="/Home/searchEvents"><Icon>search</Icon></Link></li>
              <li><Link to="/Home/favorites"><Icon>turned_in</Icon></Link></li>
              <li><Link to="/Home/myItineraries"><Icon>event_available</Icon></Link></li>
              <li><Link to="/Home/editProfile"><Icon>account_circle</Icon></Link></li>
              <li><a onClick={this.sweetAlert}><Icon>code</Icon></a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;