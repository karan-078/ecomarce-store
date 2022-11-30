import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "../reducer/Productreducer";
const AppContext = createContext();

const intialstate = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingalLoading: false,
  singleProduct: {},
};
const API = "https://api.pujakaitem.com/api/products";
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);
  const Getproducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const Products = await response.data;
      dispatch({ type: "SET_DATA", payload: Products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // call our secaond api for getting singal products
  const GetSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(url);
      const singleProducts = await response.data;
      dispatch({ type: "TYPE_SINGLE_PRODUCT", payload: singleProducts });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    Getproducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, GetSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custm hook

const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
