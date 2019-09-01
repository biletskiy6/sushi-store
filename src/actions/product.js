const addProduct = product => {
  return {
    type: "PRODUCT_ADDED_TO_CART",
    payload: product
  };
};

export { addProduct };
