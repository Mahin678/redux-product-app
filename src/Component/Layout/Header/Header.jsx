import React from "react";
// redux element
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const selector = useSelector((state) => state.ProductCheckout);
  return (
    <div className="bg-dark text-white py-4 text-center">
      <h2 className="text-uppercase"> Home-e-commerce</h2>
      <div
        className="py-3 mt-3 bg-success w-75 mx-auto"
        style={{ borderRadius: "15px" }}
      >
        <Link className="text-white text-capitalize mx-2" to="/home">
          View all Product
        </Link>
        <Link className="text-white text-capitalize mx-2" to="/create-product">
          Add new product
        </Link>
        <Link className="text-white text-capitalize mx-2" to="/update-product">
          Update & Delete
        </Link>
        <Link className="text-white text-capitalize mx-2" to="/add-to-cart">
          {selector.length > 0 ? (
            <button className="btn btn-danger ">
              View Add to cart {selector.length} product
            </button>
          ) : (
            "View Add to cart"
          )}
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
