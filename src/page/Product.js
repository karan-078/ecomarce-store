import React from "react";
import FilterSection from "../camponents/FilterSection";
import Productlist from "../camponents/Productlist";
import Sort from "../camponents/Sort";
const Product = () => {
  return (
    <>
      <div className="Products_page_container">
        <div className="filter_function">
          <FilterSection />
        </div>

        <div className="fliter_products">
          <div className="sort_products">
            <Sort />
          </div>
        

         <div className="view_product">
          <Productlist />
          </div>
      </div>
      </div>
    </>
  );
};

export default Product;
