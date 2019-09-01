const closeCartModal = () => {
  return {
    type: "CLOSE_CART_MODAL"
  };
};

const deleteItemFromCart = id => {
  return {
    type: "PRODUCT_DELETED_FROM_CART",
    payload: id
  };
};

const increaseItem = item => {
  return {
    type: "PRODUCT_ADDED_TO_CART",
    payload: item
  };
};

const decreaseItem = id => {
  return {
    type: "PRODUCT_DECREASE_ITEM",
    payload: id
  };
};

export { closeCartModal, deleteItemFromCart, increaseItem, decreaseItem };
