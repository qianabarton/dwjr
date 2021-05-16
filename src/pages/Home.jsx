import React, {Component} from 'react';

import main from '../images/home.png'
import Footer from '../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <div className="page center">
                <img className="main-image" src={main}/>
                <div className="text-block special-desktop">
                    <p>Marketing
                        <span class="roboto"> & </span>
                        Strategy Professional
                        <br/>Writer | Storyteller</p>
                </div>

                <div className="text-block special-mobile ">
                    <p>Marketing
                        <span className="roboto"> & </span>
                        Strategy Pro
                        <br/>
                        Writer | Storyteller</p>
                </div>

                <hr className="divider"/>

                <div className="text-block">
                    <h2>Characteristics:</h2>
                    <ul className="block-list">
                        <li>Native of the Southside of Chicago</li>
                        <li>Whitney Young HS Alumnus</li>
                        <li>Former Big-12 and MAAC Conference Athlete</li>
                        <li>University of Missouri and Niagara University (NY)</li>
                        <li>MBA Graduate (Strategic Marketing and Commerce)</li>
                        <li>1 Year Professional Athlete (China)</li>
                        <li>10+ Years Marketing Professional</li>
                    </ul>
                </div>

                <div className="text-block">
                    <h3>Maximizing Marketing Strategies Professionally Since 2010</h3>
                </div>

                <hr className="divider"/>

                <div className="text-block ">
                    <h2>Expertise:</h2>
                    <ul className="block-list ">
                        <li>Ideation of Marketing Strategies</li>
                        <li>Writing Versatility</li>
                        <li>Producing Marketing Campaigns</li>
                        <li>Research & Development</li>
                        <li>Cultural Initiatives</li>
                    </ul>
                </div>

                <hr className="divider "/>

                <div className="text-block ">
                    <p>There’s always a need for a rapport of understanding and perspective, in
                        business and in life. Understanding strategy, trends and functions to always
                        maximize potential. The key is maintaining the authenticity of the final
                        product. Respecting and staying true to the game.
                    </p>
                </div>

                <hr className="divider "/>

                <div className="text-block ">
                    <h3>Artistry Gives the World Definition. With Art Comes Belief.</h3>
                </div>

                <hr className="divider"/>

                <div className="text-block">
                    <h2>Commitment</h2>
                    <p>Versatility. Committed to helping consumers experience storytelling in a new
                        way. My prowess has a range from professional athlete to exceptional performance
                        in business development, relationship building and brand marketing. A true
                        passion for details, organization and execution while also thinking outside the
                        box and working with a multitude of individuals.
                        <br/><br/>Self-starter. Integrity holder.
                    </p>
                </div>

                <hr className="divider"/>

                <div className="text-block">
                    <h3>The intent of this
                        <span className="accent">
                            shareable platform
                        </span>
                        is to have a digital destination composed of foregoing work as reference for
                        potential partnerships and opportunities in marketing</h3>
                </div>
                <Footer/>
            </div>
        );
    }
}
