import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

class LineItem extends Component {
    constructor(props) {
        super(props);

        this.decrementQuantity = this
            .decrementQuantity
            .bind(this);
        this.incrementQuantity = this
            .incrementQuantity
            .bind(this);
    }

    decrementQuantity(lineItemId) {
        const updatedQuantity = this.props.line_item.quantity - 1
        this.props.updateCartTotal(updatedQuantity)
        this
            .props
            .updateQuantityInCart(lineItemId, updatedQuantity);
    }

    incrementQuantity(lineItemId) {
        const updatedQuantity = this.props.line_item.quantity + 1
        this.props.updateCartTotal(updatedQuantity)

        this
            .props
            .updateQuantityInCart(lineItemId, updatedQuantity);
    }

    render() {

        return (
            <li className="Line-item">

                <Container className="special">
                    <Row>
                        <Col xs={3}>
                            <div className="Line-item__img2">
                                {this.props.line_item.variant.image
                                    ? <img
                                            src={this.props.line_item.variant.image.src}
                                            alt={`${this.props.line_item.title} product shot`}/>
                                    : null}
                            </div>
                        </Col>

                        <Col>
                            <div className="Line-item__info">
                            <span className="Line-item__title">
                                {this.props.line_item.title}
                            </span>
                            <Row className="Line-item__custom">
                                <div className="Line-item__quantity-container">
                                    <button
                                        className="Line-item__quantity-update"
                                        onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
                                    <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
                                    <button
                                        className="Line-item__quantity-update"
                                        onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
                                </div>
                                <span className="Line-item__price">
                                    $ {this.props.line_item.variant.price}
                                </span>
                                    </Row>
                                <div>
                                    <button
                                        className="Line-item__remove"
                                        onClick={() => this.props.removeLineItemInCart(this.props.line_item.id)}>Remove</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </li>

        );
    }
}

export default LineItem;
