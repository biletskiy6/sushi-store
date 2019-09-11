import React from "react";
import "./header.scss";
import logoIcon from "../../assets/images/logo.png";
import cartIcon from "../../assets/images/shopping-cart-48.png";
import phoneIcon from "../../assets/images/phone-call.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Search from "../search";
const Header = ({ cartList }) => {
  const cartItemsCount = cartList.length;
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logoIcon} alt="" />
      </Link>
      <a href="#" className="phone">
        <img src={phoneIcon} alt="" />
        +38(068)026-27-20
      </a>
      <div className="user-box">
        <div className="user-search">
          <Search />
        </div>
        <div className="user-cart">
          <Link to="/cart/">
            <img src={cartIcon} alt="" />
            <span className="user-cart__counter">{cartItemsCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ cart: { cartList } }) => {
  return { cartList };
};

export default connect(mapStateToProps)(Header);
