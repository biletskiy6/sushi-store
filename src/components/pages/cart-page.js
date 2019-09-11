import React from "react";
import Header from "../header";
import CategoriesList from "../categories-list";
import Cart from "../cart";
import "./pages.scss";
const CartPage = props => {
  return (
    <React.Fragment>
      <Header />
      <CategoriesList />
      <Cart />
    </React.Fragment>
  );
};

export { CartPage };
