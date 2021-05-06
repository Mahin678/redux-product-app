import * as Type from "./Type";
export const productCreate = (data) => (dispatch) => {
  dispatch({ type: Type.PRODUCT_CREATE, payload: data });
};

export const productDelete = (id) => (dispatch) => {
  dispatch({ type: Type.PRODUCT_DELETE, payload: id });
};

export const productUpdate = (data) => (dispatch) => {
  dispatch({ type: Type.PRODUCT_UPDATE, payload: data });
};
export const addToCart = (data) => (dispatch) => {
  dispatch({ type: Type.PRODUCT_CHECKOUT, payload: data });
};
export const removeAddToCart = (id) => (dispatch) => {
  dispatch({ type: Type.REMOVE_PRODUCT_CHECKOUT, payload: id });
};
