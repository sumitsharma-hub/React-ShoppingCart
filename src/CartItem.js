import React from 'react'

class CartItem extends React.Component {


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
    render() {
        const { price, title, qty } = this.props.items;
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
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1612723631~hmac=cb5e1260b3221ad61b8ddbc3a3477c4e"
                            alt="increase"
                            className="action-icons"
                            onClick={() => this.props.OnincreaseQuantity(this.props.items)} />
                        <img src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612723690~hmac=f3ee801afd3e602376f1fa4373337766" alt="decrease" className="action-icons"
                            onClick={() => { this.props.OndecreaseQuantity(this.props.items) }} />
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1612723752~hmac=d1a01f1d5a3857330867886be9cc191a" alt="delete" className="action-icons"
                            onClick={this.deleteQuantity} />
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
