const productreducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_PRODUCT_DATA":
      const featureData = action.payload.filter((curElm) => {
        return curElm.featured === true;
       
      });

  
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "SET_API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      case 'SET_SINGAL_LOADING': 

      return {
        ...state,
        isSingalproductLoading:true,
      };

      case 'SET_SINGALPRODUCT_DATA': 

      return {
        ...state,
        isSingalproductLoading:false,
        SingalProduct:action.payload
       
      };

      

      case 'SET_SINGALPRODUCT_ERROR':

      return {
        ...state,
        isSingalproductLoading:false,
        isError: true,
      }
    default:
      return state;
  }
};

export default productreducer;
