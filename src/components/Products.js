import React, { Component } from 'react';

class Products extends Component {
    render() {
        return(
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href="/">
                                    <img src={product.image} alt="glasses" />
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div>${product.price}</div>
                                    <button className="button primary" onClick={() => this.props.addToCart(product)}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Products;