import React from "react";
import ItemList from "../../containers/item-list-container";
import CategoriesList from "../categories-list";
import "./pages.scss";
const HomePage = () => {
  return (
    <React.Fragment>
      <ItemList />
    </React.Fragment>
  );
};

export { HomePage };
