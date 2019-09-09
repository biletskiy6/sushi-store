const fetchCategories = categories => {
  return {
    type: "FETCH_CATEGORIES_LOADED",
    payload: categories
  };
};
const fetchProducts = products => {
  return {
    type: "FETCH_PRODUCTS_LOADED",
    payload: products
  };
};
export { fetchCategories, fetchProducts };
