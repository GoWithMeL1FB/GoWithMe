import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
        <footer className="page-footer blue">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">go with me</h5>
                        <p className="grey-text text-lighten-4"></p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">About gowithme</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">About us</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Copyright gowithme Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;