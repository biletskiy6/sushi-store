const initialState = {
  productList: null,
  cartList: [],
  isActive: false
};
const updateCartItem = (product, item, itemIndex, quantity) => {
  let newElem;
  if (itemIndex === -1) {
    newElem = {
      id: product.id,
      title: product.title,
      price: product.price,
      count: ++product.count,
      image: product.image
    };
  } else {
    newElem = {
      ...product,
      count: item.count + quantity,
      price: quantity * product.price + item.price,
      image: product.image
    };
  }
  return newElem;
};

const updateCartList = (cartList, item, index) => {
  if (item.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)];
  }

  if (index === -1) {
    return [...cartList, item];
  }

  return [...cartList.slice(0, index), item, ...cartList.slice(index + 1)];
};

const updateOrder = (state, productId, quantity) => {
  const { productList, cartList } = state;
  const product = productList.find(({ id }) => id === productId);
  const itemIndex = cartList.findIndex(({ id }) => id === productId);
  const item = cartList[itemIndex];

  const newItem = updateCartItem(product, item, itemIndex, quantity);
  return {
    ...state,
    cartList: updateCartList(cartList, newItem, itemIndex)
  };
};

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_LOADED":
      return {
        ...state,
        productList: action.payload
      };
    case "PRODUCT_ADDED_TO_CART":
      return updateOrder(state, action.payload.id, 1);
    case "PRODUCT_DECREASE_ITEM":
      return updateOrder(state, action.payload, -1);

    case "PRODUCT_DELETED_FROM_CART":
      const item = state.cartList.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    case "OPEN_CART_MODAL":
      return {
        ...state,
        isActive: true
      };

    case "CLOSE_CART_MODAL":
      return {
        ...state,
        isActive: false
      };

    default:
      return state;
  }
};

export default Cart;
