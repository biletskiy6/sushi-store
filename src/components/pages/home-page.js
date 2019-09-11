import React from "react";
import ItemList from "../../containers/item-list-container";
import Header from "../header";
import CategoriesList from "../categories-list";
import Cart from "../cart";
import "./pages.scss";
const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <CategoriesList />
      <ItemList />
    </React.Fragment>
  );
};

export { HomePage };
