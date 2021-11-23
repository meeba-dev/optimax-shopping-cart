import React from "react";

/**
 * Component for showing header
 * @component
 * @returns rendered component
 */
const Header : React.FC = () => {
    return (
        <header>
          <a href="/">
            <img src="/optimax-logo.png" alt="logo"/>
          </a>
        </header>
    )
};

export default Header;