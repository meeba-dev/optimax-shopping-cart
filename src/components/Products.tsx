import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { ProductType } from '../types/elementTypes';
import { ProductState } from '../types/stateTypes';


type Props = {
  /**
   * Array with available products
   */
  products: Array<ProductType>;
  /**
   * Method to fetch products from database
   */
  fetchProducts: () => void;
  /**
   * Gets called when the user clicks on the button Add to cart
   * @param product is product's object with all data
   */
  addToCart: (product: ProductType) => void;
}

type State = {
  /**
   * Data of product with current state
   */
  product: ProductType;
}

/**
 * Component for showing available products
 * @component
 * @returns rendered component with products from database
 */
class Products extends React.Component<Props, State> {
    /**
     * Fetching products right after rendering
     */
    componentDidMount() {
        this.props.fetchProducts();
    };
    /**
     * Opening a modal window for showing the order
     * @param product is product's object with all data
     */
    openModal = (product : ProductType) => {
      this.setState({ product });
    };
    /**
     * Closing the modal window with order's data
     */
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
