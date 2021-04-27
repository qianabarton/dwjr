import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import product from '../images/product.png';



export default class Shop extends Component {
    render() {
        return (
            <div className="shop-page">
                <Container>
                    <Row>
                        <Col md={6}>
                            <img className="product-img" src={product}/>
                        </Col>
                        <Col md={6} className="info-col">

                            <p className="product-title">
                            A Book That I Would Read
                            </p>
                            <p className="price">$20</p>

                            <div className="qty"></div>
                            <button className="buy-btn">Buy Now</button>
                            <div className="descriptions">
                            <ProductInfo
                                title="Description"
                                text={description()}/>
                            <ProductInfo
                                title="Construction"
                                text={construction}/>
                            <ProductInfo
                                custom="p-custom"
                                title="Approx. Size Dimensions"
                                text={sizeText()}/>
                            <ProductInfo title="Returns" text="All sales are final."/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

const ProductInfo = props => (
    <div className="product-info">
        <p className="s1">
            {props.title}
        </p>
        <p className={"s2 "+ props.custom}>
            {props.text}
        </p>
    </div>
);


 function description() {
    const text = [];

    text.push("'A Book That I Would Read' reviews the definitions & connotations of thirty-one of the most important words & phrases in the English dictionary. ");
    text.push("Many moments lead to 'A Book That I Would Read'. Honestly, because I do not read books! Novels were never my immediate source for knowledge and academic growth, as it is for others. I preferred articles, documentaries, even dictionaries and encyclopedias. I favored resources that limited the pressure of reading a prescribed material from start to finish. I found many novels to be generic, underwhelming, overhyped. There are others like me. Thirsting to absorb knowledge through other formats in an overly saturated world.");
    text.push("The book begins with the documentation of the moment I left corporate America. Producing a video later to be posted on Instagram. Timestamping the monumental year after, since videos and voice messages have the capability of living beyond our physical form. I began to compile stories, debunking theories, sayings and idioms we believe to be law and permanent constitution towards living a great, successful life. I sought even deeper answers.");
    text.push("What is our true mission? What will we do for humanity? What perspective can we provide? I began to write what I would read. Gut-wrenching material that the reader can begin to enjoy on any page. Without the pressures of order and sequence.");
    text.push("ISBN: 978-1-7370401-0-1");
    return text.map(e => <p className="s2">{e}</p>);
 }

const construction = "Book made from 100% recyclable paper, matte and glossy CMYK ink. The wrapping of the book is made from polypropylene.  Polypropylene, abbreviated as PP is a recyclable thermoplastic polymer. Polypropylene’s resin identification code is 5, and it is recyclable.";

function sizeText() {
    const text = [];
    text.push("");
    text.push("height: 11.35in");
    text.push("width: 8.5in");
    text.push("spine: 0.35in");
    return text.map(e => <p className="s2 size">{e}</p>);
 }
