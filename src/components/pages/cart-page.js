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
      <main className="main">
        <Cart />
      </main>
    </React.Fragment>
  );
};

export { CartPage };
