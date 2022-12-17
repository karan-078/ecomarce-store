import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/CartContext";

const Nav = () => {

  const {cart} = useCartContext();
    const [menuIcon, setMenuIcon] = useState();
  return (
    <>
      <div  className={menuIcon ? "navbar active" : "navbar"}>
        <ul className=" nav_lisst">
          <li>
            <NavLink to={"/"} className="nav_link"
             onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={"/about"} className="nav_link" onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to={"/product"} className="nav_link" onClick={() => setMenuIcon(false)}>
              Product
            </NavLink>
          </li>

          <li>
            <NavLink to={"/contact"} className="nav_link" onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to={"/cart"} className="nav_link troally-link" >
              <div className="cart-item">
                <FiShoppingCart className="cart_troally" />
                <span className="cart_total">{cart.length}</span>
              </div>
            </NavLink>
          </li>
        </ul>

        {/* nutton for close or open navigation in mobile */}

          <div className="  mobile_nav_btn">
            <CgMenu name="line_mainu" className="mobile_icon" onClick={() => setMenuIcon(true)} />

            <CgClose name="close-menu" className="mobile_icon close_mainu " onClick={() => setMenuIcon(false)} />
        </div>
     </div>
    </>
  );
};

export default Nav;
