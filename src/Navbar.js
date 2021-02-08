import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'


const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <i style={styles.cartIcon}><MdAddShoppingCart /></i>
                <span style={styles.cartCount}>{props.count}</span>
            </div>

        </div>
    )
}
const styles = {
    cartIcon: {
        height: 42,
        marginRight: 20,
        fontSize: 35,
        marginLeft: 20,
        // padding: "4px 3px",
        color: 'white'
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
        padding: '3px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }



}

export default Navbar
