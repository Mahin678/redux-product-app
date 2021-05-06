import React, { useState } from "react";
// import redux element
import { useDispatch, useSelector } from "react-redux";
import { productDelete } from "../../Redux/Action/ProductAction";

// import layout and  UpdateProductForm
import Layout from "../Layout/index";
import UpdateProductForm from "./UpdateProductForm/UpdateProductForm";

const UpdateProduct = () => {
  const allProducts = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [product, setProduct] = useState(false);
  const handleUpdate = (id) => {
    setUpdate(!update);
    let findSpecificProduct = allProducts.find((product) => product.id === id);
    setProduct(findSpecificProduct);
  };

  return (
    <div>
      <Layout>
        <div className="container">
          {update ? <UpdateProductForm product={product} /> : ""}
          {update && (
            <button
              onClick={() => setUpdate(false)}
              className="btn btn-success w-50 text-center mx-auto d-block"
            >
              Cancel
            </button>
          )}

          <div className="row">
            {allProducts.map((product, i) => (
              <div className="col-lg-4" key={i}>
                <div style={{ border: "1px solid #dddd" }} className="p-4 mt-5">
                  <div className="text-center mb-2">
                    <img
                      src={product.img}
                      alt="product-Img"
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                      className="img-fluid mr-2"
                    />
                    {product.img2 && (
                      <img
                        src={product.img2}
                        alt="product-Img"
                        style={{
                          width: "80px",
                          height: "80px",
                        }}
                        className="img-fluid"
                      />
                    )}
                  </div>
                  <div>
                    <h4>{product.productName}</h4>
                    Size :
                    <select className="from-control w-25 ml-1">
                      {product.productSize.lg && (
                        <option value={"lg"}>
                          {product.productSize.lg && "lg"}
                        </option>
                      )}
                      {product.productSize.xl && (
                        <option value={"xl"}>
                          {product.productSize.xl && "xl"}
                        </option>
                      )}
                      {product.productSize.sm && (
                        <option value={"sm"}>
                          {product.productSize.sm && "sm"}
                        </option>
                      )}
                      {product.productSize.m && (
                        <option value={"m"}>
                          {product.productSize.m && "m"}
                        </option>
                      )}
                    </select>
                    <h6 className="my-4">price {product.price}</h6>
                    <div className="">
                      <button
                        onClick={() => handleUpdate(product.id)}
                        className="btn btn-success w-100"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => dispatch(productDelete(product.id))}
                        className="btn btn-danger w-100 mt-2"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default UpdateProduct;
