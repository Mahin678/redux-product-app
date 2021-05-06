import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { productUpdate } from "../../../Redux/Action/ProductAction";

const UpdateProductForm = ({ product }) => {
  const { id, img, price, productName, productSize, img2 } = product;

  const {
    register,
    handleSubmit,
    formState: { errors },
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

    info.id = id;
    info.productName = data.productName;
    info.img = data.image1.length ? URL.createObjectURL(data.image1[0]) : img;
    info.img2 = imgSrc1 ? imgSrc1 : img2;
    info.price = data.price;
    info.productSize = SizeData;

    if (info.productName && info.price && info.productSize && info.img) {
      setProductAdded(true);
      setProductError(false);
      dispatch(productUpdate(info));
      e.target.reset();
    } else {
      setProductError(true);
    }
  };
  const handleImageUploadImg1 = (e) => {
    if (e.target.files[0]) {
      setImg1(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <div>
        <h2 className="container text-info text-center mt-2">
          Update Product Form
        </h2>
        <h4 className="container text-info text-capitalize mt-0 mx-auto w-50">
          <span className="d-block text-danger">
            {productError && "Please Enter exact data"}
          </span>
          <span className="d-block text-success ">
            {productAdded && "Product Updated Successfully"}
          </span>
        </h4>

        <div>
          <form
            className="form-group w-50 mx-auto mt-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="title">Product Name</label>
            <input
              defaultValue={productName}
              type="text"
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
              type="number"
              name="price"
              defaultValue={price}
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
                  defaultChecked={productSize.xl}
                  {...register("xl", { required: false })}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  xl
                </label>
              </div>
              <div className=" form-check mr-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={productSize.lg}
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
                  defaultChecked={productSize.m}
                  {...register("m", { required: false })}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  m
                </label>
              </div>

              <div className=" form-check mr-3">
                <input
                  defaultChecked={productSize.sm}
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
              {errors.xl ? "At list Xl Size  is required" : " "}
            </p>
            <div className="my-2 mb-5">
              <label htmlFor="exampleCheck1">Image</label>
              <input
                className="form-control mb-3"
                type="file"
                accept="image/*"
                name="image1"
                {...register("image1", { required: false })}
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
    </div>
  );
};

export default UpdateProductForm;
