import React from "react";
import { NavLink } from "react-router-dom";
import Backtotop from "./Backtotop";

const Footer = () => {
  return (
    <div>
      <div className="footer_main">
      
        <div className="back_to_top"><Backtotop/></div>
        <div className="footer_containt">
          <div className="sub_contint">
            <h3>Get To KNow Us</h3>

            <ul>
              <li>
                <NavLink to={"/about"}>About-us</NavLink>
              </li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className="sub_contint">
            <h3>Contact With us</h3>
            <li>
              <NavLink>Faceebok</NavLink>
            </li>
            <li>
              <NavLink>Instgram</NavLink>
            </li>
            <li>
              <NavLink>Twitter</NavLink>
            </li>
          </div>
          <div className="sub_contint">
            <h3>Let Us Help You</h3>
            <li>Your Account</li>
            <li>Help</li>
          </div>
          <div className="sub_contint">
            <h3>Make Mony With us</h3>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Global Selling</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
