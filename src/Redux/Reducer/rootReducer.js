import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import ProductCheckout from "./ProductCheckout";
const rootReducer = combineReducers({
  ProductReducer,
  ProductCheckout,
});
export default rootReducer;
