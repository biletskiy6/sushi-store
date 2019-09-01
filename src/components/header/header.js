import React from "react";
import "./header.scss";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/shopping-cart-48.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Header = ({ cartList, openCartModal }) => {
  const cartItemsCount = cartList.length;
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <img src={logo} alt='' />
      </Link>
      <a href='#'>+38(068)026-27-20</a>
      <div className='user-box'>
        <div className='user-search'>search</div>
        <div className='user-cart'>
          <button onClick={() => openCartModal()}>
            <img src={cart} alt='' />
            <span className='user-cart__counter'>{cartItemsCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ cart: { cartList } }) => {
  return { cartList };
};

const mapDispatchToProps = dispatch => {
  return {
    openCartModal: () => {
      dispatch({
        type: "OPEN_CART_MODAL"
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
