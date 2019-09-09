import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import withSushiService from "../../../hoc";
class AdminDeleteProduct extends Component {
  state = {
    products: null
  };
  componentDidMount() {
    this.props.sushiService
      .getProducts()
      .then(products => this.setState({ products }));
  }

  getTitleById = (products, productId) => {
    const title = products
      ? products.filter(({ id }) => id == productId)[0].title
      : null;
    return title;
  };

  onFormSubmit = e => {
    e.preventDefault();
    const idProductToDelete = this.props.match.params.id;
    fetch(`http://sushi-store/products/delete/${idProductToDelete}`);
    this.props.history.push("/products/");
    window.location.reload();
  };

  render() {
    const { products } = this.state;
    const { match } = this.props;
    const {
      params: { id }
    } = match;
    const title = this.getTitleById(products, id);
    return (
      <form onSubmit={this.onFormSubmit}>
        <h3>Вы подтверждаете удаление товара {title}?</h3>
        <input type="submit" value="Удалить товар" />
      </form>
    );
  }
}

export default withSushiService(withRouter(AdminDeleteProduct));
