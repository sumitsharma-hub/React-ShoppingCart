import React from 'react'
import { GoPlus } from "react-icons/go"
import { BiMinus } from "react-icons/bi"
import { MdDeleteForever } from 'react-icons/md'
const CartItem = (props) => {



    // increseQuantity = () => {
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     }, () => {
    //         console.log('this.state', this.state);
    //     })

    // }

    // decreaseQuantity = () => {
    //     const { qty } = this.state;
    //     if (qty == 0) {
    //         return;
    //     }
    //     this.setState((prevState => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     }
    //     ))
    // }

    const { price, title, qty, img } = props.items;
    const { OnincreaseQuantity, OndecreaseQuantity, Ondeleteproduct, items } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={items.img} alt="" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 15, color: 'red' }}>{title}</div>
                <div style={{ fontSize: 15, color: 'red' }}>Rs {price}</div>
                <div style={{ fontSize: 15, color: 'red' }}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    <i className="action-icons" onClick={() => OnincreaseQuantity(items)}><GoPlus /></i>
                    <i className="action-icons" onClick={() => { OndecreaseQuantity(items) }}><BiMinus /></i>
                    <i className="action-icons" onClick={() => Ondeleteproduct(items.id)}><MdDeleteForever /></i>

                </div>
            </div>
        </div>
    )


}
const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem
