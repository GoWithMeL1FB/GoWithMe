import React, { Component } from 'react';
import axios from 'axios';

class Navbar extends Component {
 
  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">sign out</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>

        <nav>
          <div className="nav-wrapper">
            <a href="#!" class="brand-logo"><i class="material-icons">work</i>go with me</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Date Course</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;