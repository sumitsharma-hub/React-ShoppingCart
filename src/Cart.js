import React, { Component } from 'react'
import CartItem from "./CartItem";

const Cart = (props) => {
    const { products } = props;
    // const gettotal = () => {
    //     let total = 0;
    //     products.forEach(counter => {
    //         total += products.price
    //     });
    //     return total;
    // }

    return (
        <div className="Cart">
            {products.map((items) => {
                return (
                    <div>

                        <CartItem
                            items={items}
                            key={items.id}
                            OnincreaseQuantity={props.OnincreaseQuantity}
                            OndecreaseQuantity={props.OndecreaseQuantity}
                            Ondeleteproduct={props.Ondeleteproduct} />

                    </div>

                )
            })}
            <span className="total" style={styles.total}>Total RS.  {props.totalprice} </span>
        </div>
    )

}
const styles = {
    total: {
        marginLeft: 100,
        textTransform: 'uppercase',
        fontWeight: 800

    }
}
export default Cart;
