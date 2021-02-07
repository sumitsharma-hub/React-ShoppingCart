import React from 'react'

const Navbar = () => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1612732678~hmac=1226c9fbb888c93269777372e274b73e"
                    alt="cart-icon" />
                <span style={styles.cartCount}>3</span>
            </div>

        </div>
    )
}
const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'

    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }



}

export default Navbar
