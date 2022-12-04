import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

const Fetureproducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="loding_animation">
        <h4>LOADING....</h4>
      </div>
    );
  }

  return (
    <div className="container_service">
    
     <div className="container_data">
     <div className="intro_data">Chek NOw</div>

   <div className="main_heading">Our Best Product</div>

     </div>
      
      <div className="show_fetur_product_container">
        <div className='show_fetur_product'>
        {featureProducts.map((curElm) => {
          return <Product key={curElm.id} {...curElm}/>;
        })}
        </div>
      
      </div>
    </div>
  );
};

export default Fetureproducts;
