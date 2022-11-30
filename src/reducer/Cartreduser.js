const CartReduser = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;

    // get value from  product object

    let Cartproduct;
    Cartproduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, Cartproduct],
    };
  }

  return state;
};

export default CartReduser;
