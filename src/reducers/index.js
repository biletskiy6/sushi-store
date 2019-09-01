import { combineReducers } from "redux";
import sushi from "./sushi";
import categories from "./categories";
import products from "./products";
import cart from "./cart";
import filter from "./filter";
export default combineReducers({
  sushi,
  categories,
  products,
  cart,
  filter
});
