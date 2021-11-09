import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { ProductType } from '../types/elementTypes';
import { ProductState } from '../types/stateTypes';


type Props = {
  products: Array<ProductType>;
  fetchProducts: () => void;
  addToCart: (product: ProductType) => void;
}

type State = {
  product: ProductType;
}

class Products extends React.Component<Props, State> {
    
    componentDidMount() {
        this.props.fetchProducts();
    };
    openModal = (product : ProductType) => {
      this.setState({ product });
    };
    closeModal = () => {
      this.setState({ product: {} as ProductType });
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
    (state : ProductState) => ({ products: state.products.items }),
    {
        fetchProducts,
        addToCart
    }
)(Products);
