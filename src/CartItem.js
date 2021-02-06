import React from 'react'

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 990,
            title: 'phone',
            qty: 1,
            img: ''
        }

    }
    increseQuantity = () => {
        console.log(this.state);
    }

    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="" alt="" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 15, color: 'red' }}>{title}</div>
                    <div style={{ fontSize: 15, color: 'red' }}>Rs {price}</div>
                    <div style={{ fontSize: 15, color: 'red' }}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612632954~hmac=56d33c5fafbf03cfc0bdfebc7a35838b"
                            alt="increase"
                            className="action-icons"
                            onClick={this.increseQuantity} />
                        <img src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1612632986~hmac=c955a307b00c380756e332c52a1f58b2" alt="decrease" className="action-icons" />
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1612633039~hmac=4eec62700e9d6ece3480a58729be4a78" alt="delete" className="action-icons" />
                    </div>
                </div>
            </div>
        )
    }

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
