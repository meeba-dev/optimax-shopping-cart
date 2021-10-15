import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, takeFromCart } from '../actions/cartActions';
import { createOrder, clearOrder } from '../actions/orderActions';
import Modal from 'react-modal';
import { formatDate } from '../utility/formaters';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email: "",
            showCheckout: false 
        };
    }
    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0)
        };
        this.props.createOrder(order);
    }
    closeModal = () => {
        this.props.clearOrder();
    };
    render() {
        const {cartItems, order} = this.props;
        return (
            <div>
                <div>
                    {cartItems.length === 0? (
                        <div className="cart cart-header">Cart is empty</div>
                    ) : (
                        <div className="cart cart-header">
                            You have {cartItems.length} in the cart{" "}
                        </div>
                    )}
                </div>
                {order && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <button className="close-modal" onClick={this.closeModal}>X</button>
                        <div className="order-details">
                            <h3 className="success-message">Your order is confirmed!</h3>
                            <h2>Order {order._id}</h2>
                            <ul>
                                <li>
                                    <div>Date:</div>
                                    <div>{formatDate(order.createdAt)}</div>
                                </li>
                                <li>
                                    <div>Email:</div>
                                    <div>{order.email}</div>
                                </li>
                                <li>
                                    <div>Customer:</div>
                                    <div>{order.name}</div>
                                </li>
                                <li>
                                    <div>Receipt details:</div>
                                    <div>
                                        {order.cartItems.map((item) => (
                                            <div>
                                                {"$"}{item.price}{" x "}{item.count}{" x "}{item.title}
                                            </div>
                                        ))}
                                    </div>
                                </li>
                                <li>
                                    <div>Total: </div>
                                    <div>{"$"}{order.total}</div>
                                </li>
                            </ul>
                        </div>
                    </Modal>
                  )}
                <div className="cart">
                    <ul className="cart-items">
                        { cartItems.map((item) => (
                        <li key={item._id}>
                            <div className="left">
                                <img src={item.image} alt={item.title} />
                                <div className="left-inside">
                                    <button onClick={() => this.props.addToCart(item)} className="add button">+</button>
                                    <button onClick={() => this.props.takeFromCart(item)} className="reduce button">-</button>
                                </div>
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div className="right">
                                    {"$"}{item.price} x {item.count}{" "}
                                    <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                        Remove
                                    </button>      
                                </div>                   
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
                {cartItems.length!==0 && (
                    <div>
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total: {" $"} 
                                    {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                                </div>
                                <button className="button primary" onClick={() => {this.setState({showCheckout: true})}}>Proceed</button>
                            </div>
                        </div>
                        {this.state.showCheckout && (
                            <div className="cart">
                                <form onSubmit={this.createOrder}>
                                    <ul className="form-container">
                                        <li>
                                            <label>CARD NUMBER</label>
                                            <input name="number" type="text" required onChange={this.handleInput} placeholder="Card Number"/>
                                        </li>
                                        <li>
                                            <div className="expiration-date">
                                                <input name="month" type="text" required onChange={this.handleInput} placeholder="MM"/>
                                                <p align="center">{"/"}</p>
                                                <input name="year" type="text" required onChange={this.handleInput} placeholder="YY"/>
                                                <input name="cvc" type="text" required onChange={this.handleInput} placeholder="CVV"/>
                                            </div>
                                        </li>
                                        <li>
                                            <label>CARD HOLDER</label>
                                            <input name="name" type="text" required onChange={this.handleInput} placeholder="Joe Doe"/>
                                        </li>
                                        <li>
                                            <label>EMAIL</label>
                                            <input name="email" type="email" required onChange={this.handleInput} placeholder="joedoe@gmail.com"/>
                                        </li>
                                        <li>
                                            <button type="submit" className="button primary">Checkout</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
};

export default connect(
    (state) => ({
        cartItems: state.cart.cartItems,
        order: state.order.order
    }),
    {
        removeFromCart,
        addToCart,
        takeFromCart,
        createOrder,
        clearOrder
    }
)(Cart);