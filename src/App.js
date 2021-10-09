import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data.json";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    };
  }
  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter( (x) => x._id !== product._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter( (x) => x._id !== product._id)));
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  takeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count--;
        if (item.count === 0) {
          this.setState({
            cartItems: cartItems.filter( (x) => x._id !== product._id),
          });
        }
        else {
          this.setState({cartItems});
        }
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter( (x) => x._id !== product._id)));
  }
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">
              <img src="/images/optimax-logo.png" alt="logo"/>
            </a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Products 
                  products={this.state.products} 
                  addToCart={this.addToCart}>
                </Products>
              </div>
              <div className="sidebar">
                <Cart createOrder={this.createOrder} cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} addToCart={this.addToCart} takeFromCart={this.takeFromCart}/>
              </div>
            </div>
          </main>
          <footer>
              <p> Made by Mikhail Baum &#9752;</p>
              <p>&copy; All copyrights reserved 2021</p>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
