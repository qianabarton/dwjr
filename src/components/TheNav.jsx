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
                    <NavDropdown title="Business Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href={cannabis} target="_blank">Cannabis Start-up</NavDropdown.Item>
                        <NavDropdown.Item href={sports} target="_blank">Sports Entity</NavDropdown.Item>
                        <NavDropdown.Item href={fieldtrip} target="_blank">The Field Trip</NavDropdown.Item>
                        <NavDropdown.Item href={distribution} target="_blank">Distribution Design Overview</NavDropdown.Item>
                        <NavDropdown.Item href={artist} target="_blank">Artist Bio Example</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="IGTV" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://www.instagram.com/tv/CJlq31Mn_Nx/" target="_blank">Mastery</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/tv/CIdlRsVHIxj" target="_blank">Social Contracts</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/tv/CHDf3vFnk1i" target="_blank">Articulation</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/tv/CEee3ftnmcl" target="_blank">Grace</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/tv/CB-9mFGHouB" target="_blank">Keep Learnin</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/tv/CA0UiLqHSGH" target="_blank">Keep Lookin</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/tv/B_sUCT7nltC" target="_blank">Keep Livin</NavDropdown.Item>
                       
                    </NavDropdown>
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                    <Link className="nav-link shop-btn" to="/shop">
                        Shop
                    </Link>
                </Nav>
            </Navbar>
        );
    }
}
