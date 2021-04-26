import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

// pdfs
import cannabis from '../pdf/businessProjects/Cannabis Start-up.pdf'
import sports from '../pdf/businessProjects/Human Performance Coaching in Professional Sports.pdf';
import fieldtrip from '../pdf/businessProjects/The Field Trip.pdf';
import distribution from '../pdf/businessProjects/Distribution Design Overview.pdf';
import artist from '../pdf/businessProjects/Artist | @briggs.pdf';
 
// IGTV

/*
https://www.instagram.com/tv/CJlq31Mn_Nx >Mastery
https://www.instagram.com/tv/CIdlRsVHIxj Social Contracts
https://www.instagram.com/tv/CHDf3vFnk1i Articulation
https://www.instagram.com/tv/CEee3ftnmcl Grace
https://www.instagram.com/tv/CB-9mFGHouB Keep Learnin
https://www.instagram.com/tv/CA0UiLqHSGH Keep Lookin 
https://www.instagram.com/tv/B_sUCT7nltC/ Keep Livin
                        */

export default class MyNav extends Component {
    render() {
        return (
            <Navbar className="center" bg="" expand="sm">
                <Nav>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                </Nav>
            </Navbar>
        );
    }
}
