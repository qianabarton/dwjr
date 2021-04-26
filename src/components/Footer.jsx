import React, {Component} from 'react';

import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer text-center">
                    <a target="_blank" href="https://www.linkedin.com/in/demetrius-williamsonjr/">
                        <img className="social-icon" src={linkedin}></img>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/dw.ii/">
                        <img className="social-icon" src={instagram}></img>
                    </a>
                    <a target="_blank" href="mailto:demetrius.williamsonjr@gmail.com">
                        <img className="social-icon" src={email}></img>
                    </a>
            </div>
        );
    }
}
