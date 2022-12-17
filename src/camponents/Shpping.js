import React from "react";
import { FaShoppingBag, FaBriefcase } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
const Shpping = () => {
  return (
    <>
      <div className="main_sheeping_container">
        <div className="shiiping_contener_section">
          <div className="first_1 shipping">
            <FaShoppingBag className="s_icon" />
            <h3 className="s_shep">Free Sheeping</h3>
            <p>
              Lorem ipsum dolor sit, ame consectetur adipisicing elit. Delectus
              fugit.
            </p>
          </div>

          <div className="first_2 shipping">
            <BsFillCartPlusFill className="s_icon"/>
            <h3 className="s_shep">Frre Delviery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              in.
            </p>
          </div>

          <div className="first_3 shipping">
            <FaBriefcase className="s_icon" />
            <h3 className="s_shep">Best quality</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
              molestias?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shpping;
