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
    //parent increasing the value of the qty by sending props.
    handleIncreaseQuantity = (items) => {
        const { products } = this.state;
        const index = products.indexOf(items);
        products[index].qty += 1;
        this.setState({
            products: products
        })

    }
    handleDecreaseQuantity = (items) => {
        const { products } = this.state;
        const index = products.indexOf(items);
        if (products[index].qty === 0) {
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        })
    }
    handleDeleteproduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id != id);
        this.setState({
            products: items
        })
    }


    render() {
        const { products } = this.state;
        return (
            <div className="Cart">
                {products.map((items) => {
                    return (
                        <CartItem items={items} key={items.id}
                            OnincreaseQuantity={this.handleIncreaseQuantity}
                            OndecreaseQuantity={this.handleDecreaseQuantity}
                            Ondeleteproduct={this.handleDeleteproduct} />
                    )
                })}
            </div>
        )
    }
}
