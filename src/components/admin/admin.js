import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import withSushiService from "../hoc";
import AdminAddProduct from "./components/admin-add-product";
import AdminAllProducts from "./components/admin-all-products";
import AdminDeleteProduct from "./components/admin-delete-product";

import AdminEditProduct from "./components/admin-edit-product";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./admin.scss";

class Admin extends Component {
  render() {
    return (
      <Router basename="/admin/">
        {/* <Route path="/admin" exact component={() => <span>1</span>}></Route> */}
        <div className="admin">
          <aside className="admin-aside">
            <nav className="admin-navigation">
              <ul>
                <li>
                  <Link to="/products/">Управление продуктами</Link>
                </li>
                <li>
                  <Link to="/categories/">Управление категориями</Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="admin-main">
            <Route
              path="/categories/"
              component={() => (
                <span>
                  Управление Категориями
                  <Link to="/category/add/">Add category</Link>
                </span>
              )}
            ></Route>
            <Route path="/products/" component={AdminAllProducts}></Route>
            <Route path="/products/add" component={AdminAddProduct}></Route>
            <Route
              path="/products/delete/:id"
              component={AdminDeleteProduct}
            ></Route>
            <Route
              path="/products/edit/:id"
              component={AdminEditProduct}
            ></Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default withSushiService(Admin);
