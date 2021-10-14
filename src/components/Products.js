import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    };
    render() {
        return(
          <div>
            {
              !this.props.products ? (
                <div>Loading...</div> 
                  ) : (
                    <ul className="products">
                      {this.props.products.map((product) => (
                        <li key={product._id}>
                          <div className="product">
                            <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                              <img src={product.image} alt={product.title}></img>
                                <p>{product.title}</p>
                            </a>
                            <div className="product-price">
                              <div>{"$"}{product.price}</div>
                                <button className="button primary" onClick={() => this.props.addToCart(product)}>
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </li>
                      ))}
                    </ul>
                  )}
          </div>
        );
    }
};


export default connect(
    (state) => ({ products: state.products.items }),
    {
        fetchProducts,
        addToCart
    }
)(Products);
