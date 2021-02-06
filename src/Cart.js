import React, { Component } from 'react'
import CartItem from "./CartItem";

export default class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        )
    }
}
