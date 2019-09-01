import React from "react";
import Header from "../header";
import CategoriesList from "../categories-list";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages";
import ItemList from "../../containers/item-list-container";
import "./app.scss";
import Cart from "../cart";

const Row = ({ LeftColumn, RightColumn }) => {
  return (
    <div className='row'>
      <LeftColumn />
      <RightColumn />
    </div>
  );
};

const App = () => {
  return (
    <div className='app'>
      <Cart />
      <Header />
      <div className='app-container'>
        <CategoriesList />
        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route
            path='/categories/:id'
            component={({ match: { params } }) => {
              const { id } = params;
              return <ItemList productId={id} />;
            }}
          ></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
