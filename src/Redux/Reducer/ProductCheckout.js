import * as Type from "../Action/Type";
// fake data
const int = [];
const ProductCheckout = (state = int, action) => {
  switch (action.type) {
    case Type.PRODUCT_CHECKOUT:
      let checkoutProduct = [...state];
      checkoutProduct.push(action.payload);
      return checkoutProduct;
    case Type.REMOVE_PRODUCT_CHECKOUT:
      const ExistingProduct = [...state];
      const existingData = ExistingProduct.filter(
        (data) => data.adToCartId !== action.payload
      );
      return existingData;
    default:
      return state;
  }
};
export default ProductCheckout;
