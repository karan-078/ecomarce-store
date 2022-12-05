import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyImage from "../camponents/MyImage";
import Star from "../camponents/Star";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from "../price/FormetPrice";
import AddToCart from "../camponents/AddToCart";
const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { isSingalproductLoading, SingalProduct, getSingalproduct } =
    useProductContext();

  console.log(SingalProduct);
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = SingalProduct;

  useEffect(() => {
    getSingalproduct(`${API}?id=${id}`);
  }, []);

  if (isSingalproductLoading) {
    return <div className="page_loading">Loading.....</div>;
  }
  return (
    <>
      <div className="singlproduct_container">
        <div className="store_data_container">
          <div className="image_fliter">
            <MyImage imgs={image} />
          </div>

          <div className="singal_data_section">
            <h2>{name}</h2>
            <h2>
              {company} {category}
            </h2>

            <Star Stars={stars} reviews={reviews} />

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>

            <h3 className="product-data-price product-data-real-price">
              <span clalssName="spical_deal">Deal of the Day</span> :{" "}
              <FormatPrice price={price} />
            </h3>
            <p>{description}</p>

            <hr />

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>

            {stock > 0 && <AddToCart product={SingalProduct} />}
          </div>

        
       
      
      </div>
      </div>
    </>
  );
};

export default SingleProduct;
