import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
const Header = () => {
  return (
    <>
      <div className="header_section">
        <div className="image_container">
          <NavLink to={"/"}>
            <img src="./image/bisht-logo.png" alt="logo" className="logo" />
          </NavLink>
        </div>
        <Nav />
      </div>
    </>
  );
};

export default Header;
