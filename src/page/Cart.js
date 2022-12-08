import Cartitem from "../camponents/Cartitem";
import { useCartContext } from "../context/CartContext";
const Cart = () => {
  const { cart } = useCartContext();
  if(cart.length===0){
    console.log('hello')
  }
  return (
    <div className="cart_container_1">
      <div className="cart_container_2">
        <div className="cart_heading">
          {
          
          }
          <h1>Shopping-Cart</h1>

          <h4>Price</h4>
        </div>
      </div>
      <hr />

      <div className="cart-item">
        {cart.map((curElem) => {
          return <Cartitem key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
