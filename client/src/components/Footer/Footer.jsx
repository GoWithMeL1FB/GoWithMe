import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  
  render() {
    return (
        <footer class="page-footer blue">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">go with me</h5>
                        <p class="grey-text text-lighten-4"></p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">About gowithme</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">About us</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2018 Copyright gowithme Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;