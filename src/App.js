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
          img: './images/mobile',
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
