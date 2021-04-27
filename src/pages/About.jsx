import React, {Component} from 'react';

import resume from '../pdf/Demetrius.Williamson (n.2021).pdf';
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
                    <span className="roboto "> & </span>
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
                    <span className="roboto "> & </span>
                    brand marketing.
                    <br/><br/>
                    Business and athletics remain a cornerstone of my foundation. Though, my passion
                    expands through fashion, photography, music and art.<br/>
                </p>

                <div className="articles ">
                    <h2>Articles</h2>
                    
                    <a target="_blank " href="https://www.bakersfield.com/sports/where-are-they-now-ex-bc-player-williamson-is-niagara/article_8cc96d5e-f58f-5181-ae2c-f85056b9f9e0.html">Where Are They Now? Ex-BC player Williamson is Niagara's top 3-point threat</a><br/>
                    <a target="_blank " href="https://www.niagara-gazette.com/news/local_news/mens-basketball-nu-s-williamson-is-academic-ace/article_a9dbf7de-0e54-56eb-b55f-43f6b8f645e2.html">NU's Williamson is Academic Ace</a><br/>
                    <a target="_blank " href="https://www.niagara-gazette.com/sports/mens-basketball-williamson-is-niagaras-sixth-starter/article_e75fe692-72ad-5614-93f1-b96d63c89ae2.html">Williamson is Niagara's Sixth Starter</a><br/>
                    <a target="_blank " href="https://www.niagara-gazette.com/news/local_news/men-s-basketball-niagara-s-williamson-follows-the-bouncing-ball/article_c24fa2c0-f14d-52de-a3cc-36e09e257dde.html">Niagara's Williamson Follows the Bouncing Ball</a><br/>
                    <a target="_blank " href="https://www.niagara-gazette.com/news/local_news/men-s-basketball-meech-helps-niagara-out-of-slump/article_98225230-eeef-57cd-857f-c54240ac31ec.html">Meech Helps Niagara Out of Slump</a><br/>
                    <a target="_blank " href="https://www.niagara-gazette.com/sports/mens-basketball-williamson-sparks-niagaras-win-over-saint-peters/article_fef4a089-1c20-501a-8378-39fa0ea3aa16.html">Williamson Sparks Niagara's Win Over Saint Peter's</a><br/>
                    <a target="_blank " href="https://buffalonews.com/news/eagles-take-late-flight/article_e5802b9a-e3ed-5231-962e-b806d019c03c.html">Eagles Take Late Flight</a><br/>
                    <a target="_blank " href="https://www.niagara-gazette.com/sports/men-s-basketball-nu-closes-out-iona/article_d69a4ad5-6b7e-5c73-9044-ce6329b4a8e8.html">NU Closes Out Iona</a><br/>
                    <a target="_blank " href="https://www.niagara-gazette.com/sports/college-basketball-purple-eagles-have-plenty-to-prove/article_6b108ba2-250a-5f0b-b317-3b14db2733c9.html">Purple Eagles Have Plenty to Prove</a><br/>
                    <a target="_blank " href="https://www.youtube.com/watch?v=DD7H_lYLn8A">NSN Feature - Demetrius Williamson Feature</a>

                </div>
                <Footer/>
            </div>
        );
    }
}
