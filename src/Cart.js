import React, { Component } from 'react'
import CartItem from "./CartItem";

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 990,
                    title: 'phone',
                    qty: 2,
                    img: '',
                    id: 1
                },
                {
                    price: 60000,
                    title: 'Laptop',
                    qty: 3,
                    img: '',
                    id: 2
                },
                {
                    price: 10000,
                    title: 'watch',
                    qty: 5,
                    img: '',
                    id: 3
                }
            ]
        }

    }
    render() {
        const { products } = this.state;
        return (
            <div className="Cart">
                {products.map((items) => {
                    return (
                        <CartItem items={items} key={items.id} />
                    )
                })}
            </div>
        )
    }
}
