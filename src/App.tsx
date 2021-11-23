import React from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import store from './store';
import { Provider } from 'react-redux';


/**
 * Main component. App renders the application.
 */

export default class App extends React.Component {
  
  render() {
    
    return (
      <Provider store={store}>
        <div className="grid-container">
          <Header />
          <main>
            <div className="content">
              <div className="main">
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </Provider>
    );
  }
}