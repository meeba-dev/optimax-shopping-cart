import React from "react";

/**
 * Component for showing header
 * @component
 * @returns rendered component
 */
class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="/">
          <img src="/optimax-logo.png" alt="logo"/>
        </a>
      </header>
    )
  }
};

export default Header;