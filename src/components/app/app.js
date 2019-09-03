import React from "react";

import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  AdminPage,
  CategoryPage,
  AdminProductAddPage
} from "../pages";
import "./app.scss";

const App = props => {
  return (
    <div className="app">
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/admin" exact component={AdminPage}></Route>
          <Route
            path="/admin/product/add"
            exact
            component={AdminProductAddPage}
          ></Route>
          <Route
            path="/categories/:id"
            component={({ match: { params } }) => {
              const { id } = params;
              return <CategoryPage id={id} />;
            }}
          ></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
