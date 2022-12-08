const Cartreducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
     
    
        let cartProduct;
    
        cartProduct = {
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
          cart: [...state.cart, cartProduct],
        };
      }
    
      if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
          (curItem) => curItem.id !== action.payload
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
    
      return state;
    };

export default Cartreducer;


// 5872108000150
// ifsccode : CNR B0005872 MICR Code