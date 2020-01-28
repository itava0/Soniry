import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="nav">
        <Link className="nav__logo-name" to="/">soniry</Link>
            <Link to="/">
              products
            </Link>
            <form className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search Pruduct..."
        />
      </form>
        <Link to="/cart">
           <i className="fas fa-cart-plus"></i> <span>1</span>
        </Link>
      </nav>

    );
  }
}

export default Navbar;
