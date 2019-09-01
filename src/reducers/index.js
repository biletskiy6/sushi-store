import { combineReducers } from "redux";
import sushi from "./sushi";
import categories from "./categories";
import products from "./products";
import cart from "./cart";
export default combineReducers({
  sushi,
  categories,
  products,
  cart
});
