import React from 'react'
import Product from './Product';
const Fliterproduct = ({products}) => {
  return (
  
    <>
      <div className="flex_view">

      <div className="fliter">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
      </div>
    
    </>
          
  )}


export default Fliterproduct
