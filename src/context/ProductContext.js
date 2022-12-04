import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../reducer/productreducer";
const Appcontext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const intialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingalproductLoading: false,
  SingalProduct: {},
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  // api call for get products data
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.get(url);
      const products = await response.data;
      dispatch({ type: "SET_PRODUCT_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SET_API_ERROR" });
    }
  };

  // second time api call fro get indviusal product data

  const getSingalproduct = async(url)=>{
    dispatch({ type: "SET_SINGAL_LOADING" });

    try {
      const response = await axios.get(url);
      const SingalProduct = await response.data;

      dispatch({ type: "SET_SINGALPRODUCT_DATA", payload:SingalProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGALPRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <Appcontext.Provider value={{ ...state,getSingalproduct }}>{children}</Appcontext.Provider>
  );
};

// costam hook for handal product

const useProductContext = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, useProductContext };
