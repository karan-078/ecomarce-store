import React from "react";
import { NavLink } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="home-container">
      <div className="hero home_hero_section">
        <div className="home_containt">
          <div className="container">
            <h2>ONLINE</h2>
            <h1>SHOPPING</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              voluptas distinctio quod magni quis pariatur fugit consequuntur
              quae modi nesciunt. Maxime autem libero in sed reiciendis ad,
              architecto voluptas modi cum molestias sunt tempore perferendis
              possimus, explicabo omnis voluptatibus beatae!
            </p>



           <NavLink to={'/product'}>
           <button type="button" className="shooping_button">
              BUY
            </button>
           </NavLink>
          
          </div>
        </div>
        <div className="image_container_2">
          <figure>
            <img src="./image/home.jpg" alt="logo" className="home_image" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
