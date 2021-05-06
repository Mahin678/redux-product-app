import React from "react";
import { useState } from "react";

// import redux element
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeAddToCart,
} from "../../../Redux/Action/ProductAction";

const ProductCart = ({ product }) => {
  const [pSize, setProductSize] = useState("lg");
  const dispatch = useDispatch();

  const { price, productName, productSize, img, update, img2, id, adToCartId } =
    product || "" || [];

  const [viewImg, setViewImg] = useState({ src: img, img1: true });

  const handleAddToCart = () => {
    let productInfo = {};
    productInfo.price = price;
    productInfo.img = img;
    productInfo.img2 = img2;
    productInfo.productName = productName;
    productInfo.productSize = pSize;
    productInfo.update = false;
    productInfo.id = id;
    productInfo.adToCartId = Math.round(Math.random() * 1000 + 500);
    dispatch(addToCart(productInfo));
    addToCart(productInfo);
  };
  return (
    <div style={{ border: "1px solid #dddd" }} className="p-4 mt-5">
      <div className="text-center mb-2">
        <img
          src={viewImg.src}
          alt="product-Img"
          className="img-fluid w-25 p-2"
        />
      </div>
      <img
        src={img}
        alt="product-Img"
        onClick={() => setViewImg({ src: img, img1: true })}
        style={{
          width: "40px",
          height: "40px",
          border: `${viewImg.img1 ? "1px solid red" : ""}`,
        }}
        className="img-fluid mr-2"
      />
      {img2 && (
        <img
          src={img2}
          alt="product-Img"
          style={{
            width: "40px",
            height: "40px",
            border: `${viewImg.img1 ? "" : "1px solid red"}`,
          }}
          className="img-fluid"
          onClick={() => setViewImg({ src: img2, img1: false })}
        />
      )}

      <div>
        <h4>{productName}</h4>
        Size :
        {update == undefined ? (
          <select
            onChange={(e) => setProductSize(e.target.value)}
            className="from-control w-25 ml-1"
          >
            {productSize.lg && (
              <option value={"lg"}>{productSize.lg && "lg"}</option>
            )}
            {productSize.xl && (
              <option value={"xl"}>{productSize.xl && "xl"}</option>
            )}
            {productSize.sm && (
              <option value={"sm"}>{productSize.sm && "sm"}</option>
            )}
            {productSize.m && (
              <option value={"m"}>{productSize.m && "m"}</option>
            )}
          </select>
        ) : (
          productSize
        )}
        <h6 className="my-4">price {price}</h6>
        <div className="d-flex   justify-content-between">
          {update == undefined ? (
            <button
              onClick={() => handleAddToCart()}
              className="btn btn-success"
            >
              Add to cart
            </button>
          ) : (
            <button
              onClick={() => dispatch(removeAddToCart(adToCartId))}
              className="btn btn-danger w-100"
            >
              Remove to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
