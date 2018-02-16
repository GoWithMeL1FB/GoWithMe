import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './Footer.css';
import mongo from '../../../../public/mongo.svg';
import js from '../../../../public/nodejs.svg';
import docker from '../../../../public/docker.svg';
import aws from '../../../../public/aws.svg'
import mysql from '../../../../public/mysql.svg';
import node from '../../../../public/nodejs.svg';
import redux from '../../../../public/redux.svg';
import react from '../../../../public/react.svg';
import nginx from '../../../../public/ngnix.png';
import redis from '../../../../public/redis.svg';
// import redhat from '../../../../../fakeDatas/redhat.svg';
class Footer extends Component {

  render() {
    return (
        <footer className="page-footer blue-grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l12 s12">
                        <h5 className="white-text">Technologies</h5>
                        <p className="grey-text text-lighten-4"></p>
                        <div>
                            <Row>
                                <Col s={3}>
                                    <img
                                        className="LOGO"
                                        src={js}
                                        height="70"
                                    />
                                </Col>
                                <Col s={3}>
                                    <img
                                        className="LOGO"
                                        src={react}
                                        height="70"
                                    />
                                </Col>
                                <Col s={3}>
                                    <img
                                        className="LOGO"
                                        src={docker}
                                        height="70"
                                    />
                                </Col>
                                <Col s={3}>
                                    <img
                                        className="LOGO"
                                        src={redux}
                                        height="70"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col s={3}>
                                    <img
                                    className="LOGO"
                                    src={redis}
                                    height="70"
                                    />
                                </Col>
                                <Col s={3}>
                                    <img
                                    className="LOGO"
                                    src={nginx}
                                    height="70"
                                    />
                                </Col>
                                <Col s={3}>
                                    <img
                                    className="LOGO"
                                    src={aws}
                                    height="70"
                                    />
                                </Col>
                                <Col s={3}>
                                    <img
                                    className="LOGO"
                                    src={mongo}
                                    height="70"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Copyright gowithme, LLC. All rights reserved.
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;

// <ul>
//     <li><a className="grey-text text-lighten-3" href="#!">About us</a></li>
//     <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
// </ul>