import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import contactImg from '../images/head-5.jpeg';
import Footer from '../components/Footer'

export default class Contact extends Component {
    render() {
        return (
            <div className="page">
                <div class="container">
                    <div className="row">
                        <div
                            class="d-flex col-xs-12 col-md-7 align-items-center justify-content-center">
                            <div className="contact-body ">
                                <p>
                                    There are no bounds on where one conversation could go. Let’s collaborate!
                                </p>
                                <a href="mailto:demetrius.williamsonjr@gmail.com">dwjr.content@gmail.com</a>
                                <Footer/>
                            </div>
                        </div>

                        <div className="col-md-5 text-center">
                            <img className="contact-image" src={contactImg}/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
