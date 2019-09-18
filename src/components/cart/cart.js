import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as cartActions from "../../actions/cart";
import "./cart.scss";

const getTotalPrice = cartList => {
  let total = 0;
  cartList.map(({ price }) => {
    total += price;
  });
  return total;
};

const renderCartItems = (handles, cartList, isCheckoutPage) => {
  console.log(isCheckoutPage);
  const { deleteItemFromCart, increaseItem, decreaseItem } = handles;
  if (cartList.length === 0) {
    return <h2>Ваша корзина пуста!</h2>;
  }
  return (
    <React.Fragment>
      <h2 className="cart-header">Ваш заказ</h2>
      <ul className="cart-list">
        {cartList &&
          cartList.map(item => {
            return (
              <li key={item.id} className="cart-list-item">
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <div className="filters-container">
                  <div className="toggle-count">
                    <button onClick={() => decreaseItem(item.id)}>-</button>
                    {item.count}
                    <button onClick={() => increaseItem(item)}>+</button>
                  </div>
                  <span>$ {item.price}</span>
                  <button
                    onClick={() => deleteItemFromCart(item.id)}
                    className="delete-item"
                  >
                    &times;
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="total">
        <h3 className="total__header">Общая стоимость:</h3>
        <p className="total__price">{getTotalPrice(cartList)} грн</p>
      </div>
      {!isCheckoutPage && (
        <div className="accept-order">
          <Link to="/checkout/">Оформить заказ</Link>
        </div>
      )}
    </React.Fragment>
  );
};

const Cart = ({
  cartList,
  isActive,
  deleteItemFromCart,
  decreaseItem,
  increaseItem,
  isCheckoutPage
}) => {
  let handles = {
    deleteItemFromCart,
    decreaseItem,
    increaseItem
  };
  return (
    <div className="cart order-container">
      <div className="cart-content">
        {renderCartItems(handles, cartList, isCheckoutPage)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartList, isActive } }) => {
  return { cartList, isActive };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(cartActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
