import React, { Component } from "react";
import ItemList from "../components/item-list/item-list";
import { connect } from "react-redux";
import withSushiService from "../components/hoc";
import { fetchProducts } from "../actions";
import orderBy from "lodash/orderBy";

class ItemListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchProducts();
  };

  render() {
    return <ItemList {...this.props} />;
  }
}

const filterItems = (itemList, term) => {
  switch (term) {
    case "all":
      return itemList;
    case "priceLow":
      return orderBy(itemList, "price", "asc");
    case "priceHigh":
      return orderBy(itemList, "price", "desc");
    case "newest":
      return orderBy(itemList, "id", "desc");
    default:
      return itemList;
  }
};

const searchFilter = (itemList, term) => {
  return itemList.filter(item => {
    return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
  });
};

const mapStateToProps = (
  { products: { itemList }, filter: { filterBy, searchTerm } },
  ownProps
) => {
  const { productId } = ownProps;
  itemList = productId
    ? itemList.filter(item => item.categoryId == productId)
    : itemList;
  return {
    itemList: searchFilter(filterItems(itemList, filterBy), searchTerm.trim())
  };
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
