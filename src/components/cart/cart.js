import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/cart";
import "./cart.scss";

const getTotalPrice = cartList => {
  let total = 0;
  cartList.map(({ price }) => {
    total += price;
  });
  return total;
};

const renderCartItems = (handles, cartList) => {
  const { deleteItemFromCart, increaseItem, decreaseItem } = handles;
  if (cartList.length === 0) {
    return <h2>Ваша корзина пуста!</h2>;
  }
  return (
    <React.Fragment>
      <h2 className='cart-header'>Корзина</h2>
      <ul className='cart-list'>
        {cartList &&
          cartList.map(item => {
            // console.log(item);
            return (
              <li key={item.id} className='cart-list-item'>
                <img src={item.image} alt='' />
                <h2>{item.title}</h2>
                <div className='toggle-count'>
                  <button onClick={() => decreaseItem(item.id)}>-</button>
                  {item.count}
                  <button onClick={() => increaseItem(item)}>+</button>
                </div>
                <span>$ {item.price}</span>
                <button
                  onClick={() => deleteItemFromCart(item.id)}
                  className='delete-item'
                >
                  &times;
                </button>
              </li>
            );
          })}
      </ul>
      <div className='total'>Total price:{getTotalPrice(cartList)}</div>
    </React.Fragment>
  );
};

const Cart = ({
  cartList,
  isActive,
  closeCartModal,
  deleteItemFromCart,
  decreaseItem,
  increaseItem
}) => {
  let classNames = isActive ? "cart cart-active" : "cart";
  let handles = {
    deleteItemFromCart,
    decreaseItem,
    increaseItem
  };
  return (
    <div className={classNames}>
      <div className='cart-content'>
        <button onClick={() => closeCartModal()} className='cart-close'>
          &times;
        </button>
        {renderCartItems(handles, cartList)}
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
