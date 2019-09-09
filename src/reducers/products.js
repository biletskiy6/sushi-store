const initialState = {
  itemList: []
};

const Products = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_LOADED":
      return {
        itemList: action.payload
      };
      return "categories loaded";
    default:
      return state;
  }
};

export default Products;
