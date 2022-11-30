import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "./Context/ProductContext";
import Pagenavigation from "./components/Pagenavigation";
import Myimage from "./components/Myimage";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
const API = "https://api.pujakaitem.com/api/products";
const Singalproduct = () => {
  const { id } = useParams();
  const { GetSingleProduct, singleProduct, isSingalLoading } =
    useProductContext();

   
  const {
    id: danger,
    name,
    company,
    price,
    category,
    description,
    stars,
    reviews,
    stock,
    image,
  } = singleProduct;
  useEffect(() => {
    GetSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingalLoading) {
    return <div className="page-loading">----LOaading</div>;
  }
  return (
    <Wrraper>
      <Pagenavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="images">
            <Myimage imgs={image} />
          </div>

          {/* div for data of the products */}

          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p>{stars}</p>
            <p>{reviews}</p>
            <p className="product-data-price">
              MRP: <del>{price}</del>
            </p>

            <p className="discount-price">Deal of the day:{price}</p>

            <p className="desc">{description}</p>
            <div className="stock-detail">
              <p>
                Available:
                <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>

              <p>
                ID: <span>{danger}</span>
              </p>

              <p>
                Brand: <span>{company}</span>
              </p>
            </div>
            <hr />

            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrraper>
  );
};

const Wrraper = styled.section`
  .images {
    display: grid;
    place-items: center;
  }
`;

export default Singalproduct;
