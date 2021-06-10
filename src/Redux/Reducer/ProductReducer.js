import * as Type from "../Action/Type";

// fake data
import img1 from "../../Assets/ProductImage/2663da66-2487-4647-a6e5-ff92225bec73.jpg";
import img2 from "../../Assets/ProductImage/31456f05-f0ae-4b14-aad1-1c424000ab32.jpg";
import img3 from "../../Assets/ProductImage/49433ffe-1cbb-42b7-840c-3b7862cf743d.jpg";
import img4 from "../../Assets/ProductImage/61df1a26-a704-4214-91bd-f803c51bdc0d.jpg";
import img5 from "../../Assets/ProductImage/65b871d1-3278-4c22-85af-9c29bd110d47.jpg";
const int = [
  {
    id: "1",
    productName: "MEN'S CASUAL SHIRT || THSS2004S",
    productSize: { lg: true, xl: true, sm: true, m: true },
    img: img1,
    price: "100",
  },
  {
    id: "2",
    productName: "MEN'S CASUAL SHIRT || THSS2004S",
    productSize: { lg: true, xl: true, sm: true, m: true },
    img: img2,
    price: "200",
  },
  {
    id: "3",
    productName: "MEN'S CASUAL SHIRT || THSS2004S",
    productSize: { lg: true, xl: true, sm: true, m: true },
    img: img3,
    price: "300",
  },
  {
    id: "4",
    productName: "MEN'S CASUAL SHIRT || THSS2004S",
    productSize: { lg: true, xl: true, sm: true, m: true },
    img: img4,
    price: "400",
  },
  {
    id: "5",
    productName: "MEN'S CASUAL SHIRT || THSS2004S",
    productSize: { lg: true, xl: true, sm: true, m: true },
    img: img5,
    price: "500",
  },
];
const ProductReducer = (state = int, action) => {
  switch (action.type) {
    case Type.PRODUCT_CREATE:
      let product = [...state];

      product.push(action.payload);

      return product;

    case Type.PRODUCT_UPDATE:
      let updateProduct = { ...action.payload };
      let findProduct = state.find((data) => data.id == updateProduct.id);
      findProduct.productName = updateProduct.productName;
      findProduct.img = updateProduct.img;
      findProduct.img2 = updateProduct.img2;
      findProduct.price = updateProduct.price;
      findProduct.productSize = updateProduct.productSize;
      let allProduct = state.filter((data) => data.id !== findProduct.id);
      allProduct.push(findProduct);
      return allProduct;

    case Type.PRODUCT_DELETE:
      let latestProduct = state.filter((data) => data.id !== action.payload);
      return latestProduct;

    default:
      return state;
  }
};
export default ProductReducer;
