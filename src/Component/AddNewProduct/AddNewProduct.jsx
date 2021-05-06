import React, { useState } from "react";
// react hook form import
import { useForm } from "react-hook-form";
//  redux element import
import { useDispatch } from "react-redux";
import { productCreate } from "../../Redux/Action/ProductAction";
// import layout
import Layout from "../Layout/index";

const AddNewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const [image, setImage] = useState(false);
  const [productAdded, setProductAdded] = useState(false);
  const [productError, setProductError] = useState(false);
  const [imgSrc1, setImg1] = useState("");

  const onSubmit = (data, e) => {
    let info = {};

    let SizeData = {
      lg: data.lg,
      xl: data.xl,
      sm: data.sm,
      m: data.m,
    };
    info.id = Math.round(Math.random() * 500);
    info.productName = data.productName;
    info.img = URL.createObjectURL(data.image1[0]);
    info.img2 = imgSrc1;
    info.price = data.price;
    info.productSize = SizeData;

    if (info.productName && info.price && info.productSize && info.img) {
      setProductAdded(true);
      setProductError(false);
      dispatch(productCreate(info));
    } else {
      setProductError(true);
    }
    reset();
  };

  const handleImageUploadImg1 = (e) => {
    if (e.target.files[0]) {
      setImg1(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <Layout>
        <div>
          <h2 className="container text-info">{"" && "Id info :"}</h2>
          <h4 className="container text-info text-capitalize  mx-auto w-50">
            <span className="d-block text-danger">
              {productError && "Please Enter exact data"}
            </span>
            <span className="d-block text-success ">
              {productAdded && "Product Added Successfully"}
            </span>
          </h4>
          <div>
            <form
              className="form-group w-50 mx-auto mt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="title">Product Name</label>

              <input
                name="productName"
                className="form-control "
                {...register("productName", { required: true })}
              />

              <p
                style={{
                  visibility: `${errors.productName ? "visible" : "hidden"}`,
                  height: "15px",
                }}
                className="text-danger text-capitalize "
              >
                {errors.productName ? "Product name is required." : " "}
              </p>

              <label htmlFor="value">Price</label>
              <input
                name="price"
                {...register("price", {
                  required: true,
                })}
                className="form-control"
              />
              <p
                style={{
                  visibility: `${errors.price ? "visible" : "hidden"}`,
                  height: "15px",
                }}
                className="text-danger text-capitalize "
              >
                {errors.price ? "Product price is required." : " "}
              </p>

              <span>Size: </span>

              <div className="d-flex ">
                <div className=" form-check  mr-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("xl", { required: true })}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    xl
                  </label>
                </div>
                <div className=" form-check mr-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("lg", { required: false })}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    lg
                  </label>
                </div>
                <div className=" form-check mr-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("m", { required: false })}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    m
                  </label>
                </div>

                <div className=" form-check mr-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("sm", { required: false })}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    sm
                  </label>
                </div>
              </div>
              <p
                style={{
                  visibility: `${errors.xl ? "visible" : "hidden"}`,
                  height: "15px",
                }}
                className="text-danger text-capitalize "
              >
                {errors.xl ? "Xl Size  is required" : " "}
              </p>

              <div className="my-2 mb-5">
                <label htmlFor="exampleCheck1">Image</label>
                <input
                  className="form-control mb-3"
                  type="file"
                  accept="image/*"
                  name="image1"
                  {...register("image1", { required: true })}
                />
                <p
                  style={{
                    visibility: `${errors.image1 ? "visible" : "hidden"}`,
                    height: "15px",
                  }}
                  className="text-danger text-capitalize "
                >
                  {errors.image1 ? "Product image is required." : " "}
                </p>
                {image && (
                  <input
                    className="form-control mb-3"
                    type="file"
                    accept="image/*"
                    name="image2"
                    onChange={(e) => handleImageUploadImg1(e)}
                  />
                )}

                {!image && (
                  <button
                    onClick={() => setImage(!image)}
                    className="btn btn-dark"
                  >
                    Add more image
                  </button>
                )}
              </div>

              <button type="submit" className="form-control btn btn-danger">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AddNewProduct;
