import React from "react";
import FormatPrice from "../price/FormetPrice";
import { NavLink } from "react-router-dom";
const Listview = ({ products }) => {
  return (
    <div>
      <div className="list_view_container">
        {products.map((curElm) => {
          const { id, name, image, price, description } = curElm;
          return (
            <div className="List_container">
              <figure>
                <img src={image} alt={name} className="list_image" />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>
                
                <NavLink to={`/singalproduct/${id}`} className="btn-main">
                  <button className="btn">Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listview;
