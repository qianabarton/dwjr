import React, {Component} from 'react';

// Router
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// CSS
import './css/App.css';
import './css/mobile.css';
import './css/Shop.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import Header from './components/Header'
import TheNav from './components/TheNav'

import ShopWrapper from './pages/ShopWrapper.js';

// App
class App extends Component {
    constructor() {
        super();

        this.state = {
            isCartOpen: false,
            cartTotal: 0
        };

        this.setCartOpen = this
            .setCartOpen
            .bind(this);

        this.updateCartTotal = this
            .updateCartTotal
            .bind(this);
    }

    setCartOpen(cartState) {
        this.setState({isCartOpen: cartState});
    }

    updateCartTotal(total) {
        this.setState({cartTotal: total});
    }

    render() {
        return (
            <Router>
                <div>
                    <TheNav setCartOpen={this.setCartOpen} cartTotal={this.state.cartTotal}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route
                            exact
                            path="/shop"
                            render={(props) => (<ShopWrapper
                            setCartOpen={this.setCartOpen}
                            isCartOpen={this.state.isCartOpen}
                            updateCartTotal={this.updateCartTotal}/>)}/>
                        <Route
                            render={() => (
                            <div>
                                <h3>404</h3>
                            </div>
                        )}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
