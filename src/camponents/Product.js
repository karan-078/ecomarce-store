//  destrctur data for slider page giveng bye api
import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../price/FormetPrice";
const Product = (CurElm) => {
  const { id, image, name, price, category } = CurElm;
   
  return (
    <div className='main_image_container'>
      <NavLink to={`/singalproduct/${id}`}>
        <div className="slid_cart">
          <figure>
            <img src={image} alt={name} className="fetur_image" />
            <figcaption className="caption">{category}</figcaption>
          </figure>
        </div>

        <div className="slidr_card_data">
          <div className="card_data_flex_box">
            <h3>{name}</h3>
            <p className="data_price"><FormatPrice price={price}/></p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
