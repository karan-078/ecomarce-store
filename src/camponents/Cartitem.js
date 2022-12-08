import React from "react";
import CartAmountToggle from "./CartAmounttogel";
import FormatPrice from "../price/FormetPrice";
import { useCartContext } from "../context/CartContext";

const Cartitem = ({ id, color, price, amount, name, image }) => {
  const { removeItem } = useCartContext();

  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div className="Cart_main_container">
      <div className="cart_header">
        <div className="cart_image_container">
          <figure>
            <img src={image} alt={id} className="cart_image" />
          </figure>
          <div className="cart_data">
            <h4>{name}</h4>

            <div className="color_header">
              <p>color</p>
              <div
                className="color-style__"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>

            <div className="quanity">
              <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
            </div>
            <div>
          <button className="remove_icon" onClick={() => removeItem(id)} >Delete</button>
        </div>
          </div>
        </div>

        {/* pricE */}

        {/* <div className="cart-hide">
          <p>
            <FormatPrice price={price} />
          </p>
        </div> */}

        {/* quanitty*/}

        <div className="cart-hide">
          <h4>
            <FormatPrice price={price * amount} />
          </h4>
        </div>

       
      </div>

    </div>
  );
};

export default Cartitem;
