import React from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
  
  render() {
    return (
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
    );
  }
}