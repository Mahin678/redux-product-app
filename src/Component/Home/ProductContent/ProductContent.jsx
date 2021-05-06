import React from "react";
// import redux element
import { useSelector } from "react-redux";
// import ProductCart
import ProductCart from "../../Utilities/ProductCart/ProductCart";

const ProductContent = () => {
  const ProductData = useSelector((state) => state.ProductReducer);

  return (
    <div>
      <div className="container">
        <div className="row">
          {ProductData.length ? (
            ProductData.map((product, i) => (
              <div className="col-lg-4" key={i}>
                <ProductCart product={product} />
              </div>
            ))
          ) : (
            <h4 className="text-center text-danger mx-auto d-block mt-5">
              Please First Add some product
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
