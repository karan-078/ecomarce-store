import React from "react";
import { useFilterContext } from "../context/FilterContext";
import Fliterproduct from "./Fliterproduct";
import Listview from "./Listview";
const Productlist = () => {
  const { filter_products, flex_view } = useFilterContext();
  if (flex_view) {
    return <Fliterproduct products={filter_products} />;
  }

  if (flex_view === false) {
    return <Listview products={filter_products} />;
  }
};

export default Productlist;
