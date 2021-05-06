import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/rootReducer";

const middleware = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
export default store;
