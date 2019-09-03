import React from "react";
import ItemList from "../../containers/item-list-container";
import Header from "../header";
import CategoriesList from "../categories-list";
import Cart from "../cart";
import "./pages.scss";
const CategoryPage = props => {
  const { id } = props;
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <CategoriesList />
      <ItemList productId={id} />
    </React.Fragment>
  );
};

export { CategoryPage };
