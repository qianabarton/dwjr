import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import NumericInput from 'react-numeric-input';

import VariantSelector from './VariantSelector';

class Product extends Component {
    constructor(props) {
        super(props);

        let defaultOptionValues = {};
        this
            .props
            .product
            .options
            .forEach((selector) => {
                defaultOptionValues[selector.name] = selector.values[0].value;
            });
        this.state = {
            selectedOptions: defaultOptionValues
        };

        this.handleOptionChange = this
            .handleOptionChange
            .bind(this);
        this.handleQuantityChange = this
            .handleQuantityChange
            .bind(this);
        this.findImage = this
            .findImage
            .bind(this);
    }

    findImage(images, variantId) {
        const primary = images[0];

        const image = images.filter(function (image) {
            return image
                .variant_ids
                .includes(variantId);
        })[0];

        return (image || primary).src;
    }

    handleOptionChange(event) {
        const target = event.target
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;

        const selectedVariant = this
            .props
            .client
            .product
            .helpers
            .variantForOptions(this.props.product, selectedOptions)

        this.setState({selectedVariant: selectedVariant, selectedVariantImage: selectedVariant.attrs.image});
    }

    handleQuantityChange(event) {
        this.setState({selectedVariantQuantity: event});
    }

    render() {
        let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
        let variant = this.state.selectedVariant || this.props.product.variants[0]
        let variantQuantity = this.state.selectedVariantQuantity || 1

        return (
            <Container>
                <Row>
                    <Col md={6}>
                        {this.props.product.images.length
                            ? <img src={variantImage.src} alt={`${this.props.product.title} product shot`}/>
                            : null}
                    </Col>
                    <Col md={6} className="info-col">
                        <p className="product-title">
                            {this.props.product.title}
                        </p>
                        <p className="price">${variant.price}</p>

                        <div>
                            <NumericInput
                                mobile
                                type="number"
                                min={1}
                                value={variantQuantity}
                                onChange={this.handleQuantityChange}/>
                        </div>

                        <div className="qty d-md-none"></div>

                        <button
                            className="buy-btn"
                            onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart
                        </button>

                        <div className="descriptions">
                            <ProductInfo title="Description" text={description()}/>
                            <ProductInfo title="Construction" text={construction}/>
                            <ProductInfo
                                custom="p-custom"
                                title="Approx. Size Dimensions"
                                text={sizeText()}/>
                            <ProductInfo title="Returns" text="All sales are final."/>
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Product;

const ProductInfo = props => (
    <div className="product-info">
        <p className="s1">
            {props.title}
        </p>
        <p className={"s2 " + props.custom}>
            {props.text}
        </p>
    </div>
);

function description() {
    const text = [];

    text.push("'A Book That I Would Read' reviews the definitions & connotations of thirty-one " +
            "of the most important words & phrases in the English dictionary. ");
    text.push("Many moments lead to 'A Book That I Would Read'. Honestly, because I do not read" +
            " books! Novels were never my immediate source for knowledge and academic growth," +
            " as it is for others. I preferred articles, documentaries, even dictionaries and" +
            " encyclopedias. I favored resources that limited the pressure of reading a presc" +
            "ribed material from start to finish. I found many novels to be generic, underwhe" +
            "lming, overhyped. There are others like me. Thirsting to absorb knowledge throug" +
            "h other formats in an overly saturated world.");
    text.push("The book begins with the documentation of the moment I left corporate America. P" +
            "roducing a video later to be posted on Instagram. Timestamping the monumental ye" +
            "ar after, since videos and voice messages have the capability of living beyond o" +
            "ur physical form. I began to compile stories, debunking theories, sayings and id" +
            "ioms we believe to be law and permanent constitution towards living a great, suc" +
            "cessful life. I sought even deeper answers.");
    text.push("What is our true mission? What will we do for humanity? What perspective can we " +
            "provide? I began to write what I would read. Gut-wrenching material that the rea" +
            "der can begin to enjoy on any page. Without the pressures of order and sequence.");
    text.push("ISBN: 978-1-7370401-0-1");
    return text.map(e => <p className="s2">{e}</p>);
}

const construction = "Book made from 100% recyclable paper, matte and glossy CMYK ink. The wrapping of" +
        " the book is made from polypropylene.  Polypropylene, abbreviated as PP is a rec" +
        "yclable thermoplastic polymer. Polypropylene’s resin identification code is 5, a" +
        "nd it is recyclable.";

function sizeText() {
    const text = [];
    text.push("");
    text.push("height: 11.35in");
    text.push("width: 8.5in");
    text.push("spine: 0.35in");
    return text.map(e => <p className="s2 size">{e}</p>);
}
