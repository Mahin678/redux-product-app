import * as Type from "./Type";
const axios = require('axios');

// export const postView = () => async dispatch => {
//   const post = await axios.get('https://jsonplaceholder.typicode.com/posts');
//    dispatch({type: Type.VIEW_POST, payload:post});
//    console.log(post);
//  return post;
// } 
export const postView = () => async (dispatch) => {
  try {
    const post = await axios.get('https://jsonplaceholder.typicode.com/posts');
   dispatch({type: Type.VIEW_POST, payload:post});
  } catch (error) {
    console.log(error.message);
  }
};
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
