import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styled/Button";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../Context/CartContext";
const AddToCart = ({ product }) => {


  const {addToCart}= useCartContext()
  const { colors, id, stock } = product;

  const [color, setcolor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncreass = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };


  return (

      <Wraaper>
        <div className="colors">
          <p>
            colors:
            {colors.map((curColor, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: curColor }}
                  className={
                    color === curColor ? "bnt_style active " : "bnt_style"
                  }
                  onClick={() => setcolor(curColor)}
                >
                  {color === curColor ? <FaCheck /> : null}
                </button>
              );
            })}
          </p>
        </div>

        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncreass={setIncreass}
        />

  <NavLink to='/cart' onClick={() => addToCart(id, color, amount, product)}>
    <Button className='btn'>Add to Cart</Button>
  </NavLink>
      </Wraaper>
    
  );
};
const Wraaper = styled.section``;

export default AddToCart;
