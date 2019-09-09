import React, { Component } from "react";
import withSushiService from "../../../hoc";
import "./admin-all-products.scss";
import { Link } from "react-router-dom";
class AdminAllProducts extends Component {
  state = {
    itemList: null,
    categoryList: null
  };
  componentDidMount() {
    this.props.sushiService
      .getProducts()
      .then(itemList => this.setState({ itemList }));
    this.props.sushiService
      .getCategories()
      .then(categoryList => this.setState({ categoryList }));
  }

  renderItemList = itemList => {
    return (
      itemList &&
      itemList.map(item => {
        return item.title;
      })
    );
  };

  getCategoryNameById = id => {
    const { categoryList } = this.state;
    return (
      categoryList &&
      categoryList.filter(item => {
        return item.id == id;
      })[0].title
    );
  };

  render() {
    const { itemList } = this.state;
    return (
      <div className="admin-all-products">
        <Link to="/products/add">Добавить товар</Link>
        <div className="table100 ver4 m-b-110">
          <table data-vertable="ver4">
            <thead>
              <tr className="row100 head">
                <th className="column100 column1" data-column="column1">
                  id
                </th>
                <th className="column100 column2" data-column="column2">
                  Название
                </th>
                <th className="column100 column3" data-column="column3">
                  Описание
                </th>
                <th className="column100 column4" data-column="column4">
                  Цена
                </th>
                <th className="column100 column5" data-column="column5">
                  Категория
                </th>
                <th className="column100 column5" data-column="column6">
                  Функции
                </th>
              </tr>
            </thead>
            <tbody>
              {itemList &&
                itemList.map(item => {
                  return (
                    <tr key={item.id} className="row100">
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{this.getCategoryNameById(item.categoryId)}</td>
                      <td>
                        <Link to={`/products/delete/${item.id}`}>&times;</Link>
                        <Link to={`/products/edit/${item.id}`}>
                          Редактировать
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withSushiService(AdminAllProducts);
