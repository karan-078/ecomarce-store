import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/Flitterreducer";
const FliterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value: "lowest",
  filters:{
    text:'',
    category:'all',
    company:'all',
    color:'all',
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  }
};

export const FliterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

// to set grid view

const setGridview = () => {
  return dispatch({ type: "GRIED_VIEW" });
};


// to set List view

const setList = () => {
  return dispatch({ type: "List_VIEW" });
};

  const sort = (e) => {
    let uservalue = e.target.value
   dispatch({ type: "SORT_VALUE" , payload:uservalue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const clearFilter =()=>{
    return dispatch({type:'CLEAR_FILTERS'})
    };
    
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  
  useEffect(() => {
    dispatch({type:'FLITER_PRODUCTS'})
    dispatch({type:'SORTING_PRODUCTS'})
  }, [products,state.sorting_value, state.filters]);


  return (
    <FliterContext.Provider value={{ ...state, setGridview, setList, sort ,updateFilterValue,clearFilter}}>
      {children}
    </FliterContext.Provider>
  );
  }
// make costm hook for global context

export const useFliterContext = () => {
  return useContext(FliterContext);
};
