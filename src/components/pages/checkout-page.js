import React from "react";
import Header from "../header";
import CategoriesList from "../categories-list";
import "./pages.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Cart from "../cart";
import Checkout from "../checkout";
const CheckoutPage = ({ cartList, history }) => {
  return (
    <React.Fragment>
      <Header />
      <CategoriesList />
      <main className="main">
        <div className="order-container">
          {cartList.length !== 0 ? (
            <React.Fragment>
              <Checkout />
              <Cart isCheckoutPage />
            </React.Fragment>
          ) : null}
        </div>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = ({ cart: { cartList } }) => {
  return { cartList };
};

export default withRouter(connect(mapStateToProps)(CheckoutPage));
