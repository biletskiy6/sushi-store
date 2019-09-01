import React, { Component } from "react";
import ItemList from "../components/item-list/item-list";
import { connect } from "react-redux";
import withSushiService from "../components/hoc";
import { fetchProducts } from "../actions";

class ItemListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchProducts();
  };

  render() {
    return <ItemList {...this.props} />;
  }
}

const mapStateToProps = ({ products: { itemList } }, ownProps) => {
  const { productId } = ownProps;
  itemList = productId
    ? itemList.filter(item => item.categoryId == productId)
    : itemList;
  return { itemList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => {
      const { sushiService } = ownProps;
      sushiService
        .getProducts()
        .then(products => dispatch(fetchProducts(products)));
    }
  };
};
export default withSushiService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemListContainer)
);
