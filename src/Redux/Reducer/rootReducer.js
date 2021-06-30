import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import ProductCheckout from "./ProductCheckout";
import PostReducer from "./PostReducer";
const rootReducer = combineReducers({
  ProductReducer,
  ProductCheckout,
  PostReducer
});
export default rootReducer;
