import React, {Component} from 'react';

import resume from '../pdf/Demetrius_Williamson_(spt-mkg_2020).pdf';
import Footer from '../components/Footer'


export default class About extends Component {
    render() {
        return (
            <div className="page">
                <a target="_blank " href={resume}>
                    <h2>View Resume</h2>
                </a>

                <p className="about-body">
                    <br/>
                    From Chicago grew a diverse business professional who revels in potential, a
                    love for the pursuit of excellence and an inspiration towards art and cultural
                    initiatives. I am Demetrius Williamson - marketing professional, writer, avid
                    traveler
                    <span className="roboto ">&</span>
                    progressive thinker; one-time professional athlete.<br/><br/>
                    <ul className="indent">
                        <li className="quote-border">A creative mind with a strong history of achieving
                            outstanding levels in business development, increasing customer/consumer
                            engagement, nurturing cultural core values; while retaining the ability to take
                            risks.</li>
                    </ul>
                </p>
                <p className="about-body">
                    <br/>At glance, my sophistication and personality are favorable for a culturally
                        driven environment. Excellence began with an athletic foundation. I am the
                        grandson of Albert Williamson, a former professional Negro League Baseball
                        player. I traveled the world young playing organized basketball from the
                        Netherlands to Australia. Playing out my college career at NCAA Division I
                        institutions, University of Missouri and Niagara University. Finishing a
                        professional stint in China.
                    <br/><br/>
                    Beyond the basketball court, my background is Marketing, emphasizing strategy,
                    branding and storytelling. Pushing the culture and telling the most inspiring
                    stories. I worked for nearly a decade at Union Pacific, a Fortune 500 company.
                    My last position there was Senior Network Marketing Manager. I’ve also
                    collaborated for 5+ years with Jordan Brand on various marketing strategies and
                    treatments.<br/><br/>
                    After a timed departure from Union Pacific, I began consulting, writing and
                    storytelling under my own entity. As a marketing liaison, Research Class was
                    created to inspire innovative business growth while building personable
                    marketing strategies.<br/><br/>
                    My native understanding of business is truly from obsessing the work,
                    researching and crafting what pushes the needle and explode boundaries. My
                    prowess has a range from professional athlete to exceptional performance in
                    business development, relationship building
                    <span className="roboto ">&</span>
                    brand marketing.
                    <br/><br/>
                    Business and athletics remain a cornerstone of my foundation. Though, my passion
                    expands through fashion, photography, music and art.<br/>
                </p>

                <a target="_blank " href="pdf/sports/Former_Player_Profile .pdf ">Former Player Profile
                </a>

                <div className="articles ">
                    <h2>Articles</h2>
                    <br/>
                    <a
                        target="_blank "
                        href="https://www.niagara-gazette.com/sports/mens-basketball-williamson-is-niagaras-sixth-starter/article_e75fe692-72ad-5614-93f1-b96d63c89ae2.html ">MEN'S BASKETBALL: Williamson is Niagara's sixth starter</a><br/><br/>
                    <a
                        target="_blank "
                        href="https://www.bakersfield.com/sports/where-are-they-now-ex-bc-player-williamson-is-niagara/article_8cc96d5e-f58f-5181-ae2c-f85056b9f9e0.html ">Where Are They Now? Ex-BC player Williamson is Niagara's top 3-point threat</a><br/><br/>
                    <a
                        target="_blank "
                        href="https://www.niagara-gazette.com/news/local_news/men-s-basketball-niagara-s-williamson-follows-the-bouncing-ball/article_c24fa2c0-f14d-52de-a3cc-36e09e257dde.html ">MEN’S BASKETBALL: Niagara's Williamson follows the bouncing ball</a><br/><br/>
                    <a
                        target="_blank "
                        href="https://www.nytimes.com/2007/12/16/sports/basketball/16east.html ">Niagara Defeats St. John’s for First Time Since 2004</a><br/><br/>
                    <a
                        target="_blank "
                        href="https://courtvisionxl.com/scouting-and-sports-agents/122010-new-athlete-demetrius-williamson/ ">12/20/10- New Athlete, Demetrius Williamson</a><br/><br/>
                    <a target="_blank " href="https://www.youtube.com/watch?v=DD7H_lYLn8A ">NSN Feature - Demetrius Williamson Feature</a>
                </div>
                <Footer/>
            </div>
        );
    }
}
