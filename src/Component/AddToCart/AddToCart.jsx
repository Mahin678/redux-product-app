import React, { useState } from "react";
// import redux element
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Action/ProductAction";
// import Layout and productCart
import Layout from "../Layout/index";
import ProductCart from "../Utilities/ProductCart/ProductCart";

const AddToCart = () => {
  const selector = useSelector((state) => state.ProductCheckout);
  const dispatch = useDispatch();
  const [checkoutDone, setCheckoutDone] = useState(false);
  const data = selector || [];
  const handleCheckoutDone = () => {
    setCheckoutDone(!checkoutDone);
  };

  return (
    <div>
      <Layout>
        <div>
          <div className="container text-center">
            {data.length ? (
              <button
                onClick={() => handleCheckoutDone()}
                className="btn btn-success mx-auto text-center my-3 w-50"
              >
                {" "}
                Check out done
              </button>
            ) : (
              ""
            )}
            {checkoutDone && <p>Checkout Successfully Done </p>}
            <div className="row">
              {data.length ? (
                data.map((product, i) => (
                  <div className="col-lg-4" key={i}>
                    <ProductCart product={product} />
                  </div>
                ))
              ) : (
                <h2 className="text-center text-danger mx-auto my-4 text-uppercase ">
                  You have empty Product please checkout again
                </h2>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AddToCart;
