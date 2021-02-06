import React from 'react'

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="" alt="" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 20, color: 'red' }}>Phone</div>
                    <div style={{ fontSize: 20, color: 'red' }}>Rs 999</div>
                    <div style={{ fontSize: 20, color: 'red' }}>Qty:1</div>
                    <div className="cart-item-actions">
                        <button>plus</button>
                        <button>minus</button>
                        <button>delete</button>
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
