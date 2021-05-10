import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import Products from '../components/shopify/Products';
import Cart from '../components/shopify/Cart';

import Client from 'shopify-buy';

const client = Client.buildClient({storefrontAccessToken: '33a29362ebd24e9eaea77d297340b63f', domain: 'research-class.myshopify.com'});

class ShopWrapper extends Component {

    componentDidMount() {
        this.setState({isCartOpen: this.props.isCartOpen});
    }

    render() {
        return (<Shop
            client={client}
            setCartOpen={this.props.setCartOpen}
            isCartOpen={this.props.isCartOpen}
            updateCartTotal={this.props.updateCartTotal}/>);
    }
}

export default ShopWrapper;

class Shop extends Component {
    constructor() {
        super();

        this.state = {
            checkout: {
                lineItems: []
            },
            products: [],
            shop: {}
        };

        this.toggleCart = this
            .toggleCart
            .bind(this);
        this.handleCartClose = this
            .handleCartClose
            .bind(this);
        this.addVariantToCart = this
            .addVariantToCart
            .bind(this);
        this.updateQuantityInCart = this
            .updateQuantityInCart
            .bind(this);
        this.removeLineItemInCart = this
            .removeLineItemInCart
            .bind(this);
    }

    componentWillMount() {
        this.setState({isCartOpen: this.props.isCartOpen});

        this
            .props
            .client
            .checkout
            .create()
            .then((res) => {
                this.setState({checkout: res});
            });

        this
            .props
            .client
            .product
            .fetchAll()
            .then((res) => {
                this.setState({products: res});
            });

        this
            .props
            .client
            .shop
            .fetchInfo()
            .then((res) => {
                this.setState({shop: res});
            });
    }

    toggleCart() {
        this.setState(prevState => ({
            isCartOpen: !prevState.isCartOpen
        }));

        this
            .props
            .setCartOpen(!this.props.isCartOpen);
    }

    addVariantToCart(variantId, quantity) {
        this
            .props
            .setCartOpen(true);

        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10)
            }
        ]
        const checkoutId = this.state.checkout.id

        return this
            .props
            .client
            .checkout
            .addLineItems(checkoutId, lineItemsToAdd)
            .then(res => {
                this.setState({checkout: res});
                this
                    .props
                    .updateCartTotal(this.state.checkout.lineItems[0].quantity);

            });
    }

    updateQuantityInCart(lineItemId, quantity) {
        const checkoutId = this.state.checkout.id
        const lineItemsToUpdate = [
            {
                id: lineItemId,
                quantity: parseInt(quantity, 10)
            }
        ]

        return this
            .props
            .client
            .checkout
            .updateLineItems(checkoutId, lineItemsToUpdate)
            .then(res => {
                this.setState({checkout: res});
            });
    }

    removeLineItemInCart(lineItemId) {
        const checkoutId = this.state.checkout.id

        this.props.updateCartTotal(0)

        return this
            .props
            .client
            .checkout
            .removeLineItems(checkoutId, [lineItemId])
            .then(res => {
                this.setState({checkout: res});
            });
    }

    handleCartClose() {
        this
            .props
            .setCartOpen(false);
    }

    render() {
        return (
            <div>
                <Products
                    products={this.state.products}
                    client={this.props.client}
                    addVariantToCart={this.addVariantToCart}
                    updateCartTotal={this.props.updateCartTotal}/>
                <Cart
                    checkout={this.state.checkout}
                    isCartOpen={this.props.isCartOpen}
                    handleCartClose={this.handleCartClose}
                    updateQuantityInCart={this.updateQuantityInCart}
                    removeLineItemInCart={this.removeLineItemInCart}
                    updateCartTotal={this.props.updateCartTotal}/>
            </div>
        );
    }
}