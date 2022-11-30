const Productreducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingalLoading: true,
      };

    case "TYPE_SINGLE_PRODUCT":
      return {
        ...state,
        isSingalLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingalLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default Productreducer;
