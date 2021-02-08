import './App.css';
import React from 'react'
import Cart from './Cart';
import Navbar from "./Navbar"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 990,
          title: 'phone',
          qty: 2,
          img: 'https://images.unsplash.com/photo-1528795259021-d8c86e14354c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
          id: 1
        },
        {
          price: 60000,
          title: 'Laptop',
          qty: 3,
          img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          price: 10000,
          title: 'watch',
          qty: 5,
          img: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
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
  getCartcount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((counter) => {
      count += counter.qty
    })
    return count;
  }
  totalcounter = () => {
    const { products } = this.state;
    let total = 0;
    products.map((counter) => {
      total = total + counter.qty * counter.price;
    })
    return total;
  }


  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartcount()} />
        <Cart
          products={products}
          OnincreaseQuantity={this.handleIncreaseQuantity}
          OndecreaseQuantity={this.handleDecreaseQuantity}
          Ondeleteproduct={this.handleDeleteproduct}
          totalprice={this.totalcounter()}
        />
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL:{this.totalcounter()}</div>
      </div>

    );
  }
}

export default App;
