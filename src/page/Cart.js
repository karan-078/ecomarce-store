import Cartitem from "../camponents/Cartitem";
import { useCartContext } from "../context/CartContext";
import FormatPrice from "../price/FormetPrice";
const Cart = () => {
  const { cart, total_price, shipping_fee } = useCartContext();

  return (
    <div className="cart_container_1">
      <div className="cart_container_2">
        <div className="cart_heading">
          {}
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

     <hr />
      <div className="sub_total_container">
        <div className="sub_total">
          <h3 className="sutotal_heading">subtotal :</h3>
          <p className="total_price">
            <FormatPrice price={ total_price} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
