import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/Fliterreducer";
import { useProductContext } from "./ProductContext";
import { useContext } from "react";
const FilterContext = createContext();

const intialState = {
  filter_products: [],
  all_products: [],
  flex_view:true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, intialState);

  // set flex view

  const setFlexview = () => {
    return dispatch({ type: "SET_FLEX_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, setFlexview, sorting, setListView, clearFilters ,updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// creat custam hook

export const useFilterContext = () => {
  return useContext(FilterContext);
};
