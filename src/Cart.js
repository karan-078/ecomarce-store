import React from 'react'
import { useCartContext } from './Context/CartContext'
import styled from 'styled-components';
import Cartitem from './components/Cartitem';
const Cart = () => {

  const {cart} = useCartContext();
  return (
   <Wrapper>
<div className="container">

<div className="car_headeing grid grid_colum_five">
<p>item</p>
<p className = 'cart_hide'>price</p>
<p>Quantity</p>
<p className='car_hide_subtotal'>Subtotal</p>
<p>Remove</p>
</div>
<hr/>
</div>

<div className="cart_item">
  {
    cart.map((curelm)=>{
      return <Cartitem key={curelm.id}{...curelm}/>
    })
  }
</div>

   </Wrapper>
  )
}

const Wrapper = styled.section`
.grid{
display:felx;
justify-content:space-between;
}
`;

export default Cart
