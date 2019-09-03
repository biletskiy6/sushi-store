import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import withSushiService from "../hoc";

import "./admin.scss";

class Admin extends Component {
  state = {
    categories: null,
    title: "",
    description: "",
    price: "",
    image: "",
    categoryId: 13
  };

  componentDidMount = () => {
    this.props.sushiService
      .getCategories()
      .then(categories => this.setState({ categories }));
  };

  onChangeHandler = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };
  onImageHandler = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.files[0] });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", this.state.title);
    fd.append("description", this.state.description);
    fd.append("price", this.state.price);
    fd.append("categoryId", this.state.categoryId);
    fd.append("image", this.state.image, this.state.image.name);
    axios.post("http://sushi-store/products/add", fd);
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="admin">
        <aside className="admin-aside">
          <Link to="/">Siite</Link>

          <nav className="admin-navigation">
            <ul>
              <li>
                <Link to="/admin/product/add">Управление продуктами</Link>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="admin-main">
          <h2>Добавить товар</h2>
          <form
            action="#"
            onSubmit={this.onSubmitHandler}
            encType="multipart/form-data"
          >
            <input
              name="title"
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Название"
            />
            <input
              name="description"
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Описание"
            />
            <input
              name="price"
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Цена"
            />
            <select name="categoryId" onChange={this.onChangeHandler}>
              {categories &&
                categories.map(category => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category["title"]}
                    </option>
                  );
                })}
            </select>
            <input name="image" onChange={this.onImageHandler} type="file" />
            <input type="submit" value="Добавить" />
          </form>
        </main>
      </div>
    );
  }
}

export default withSushiService(Admin);
