import React from "react";
import Header from "../header";
import CategoriesList from "../categories-list";
import "./pages.scss";
import Cart from "../cart";
import Checkout from "../checkout";
const CheckoutPage = () => {
  return (
    <React.Fragment>
      <Header />
      <CategoriesList />
      <main className="main">
        <Checkout />
        <Cart isCheckoutPage />
      </main>
    </React.Fragment>
  );
};

export { CheckoutPage };
