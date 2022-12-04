import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyImage from "../camponents/MyImage";
import { useProductContext } from "../context/ProductContext";
const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { isSingalproductLoading, SingalProduct, getSingalproduct } =
    useProductContext();



    console.log(SingalProduct)
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = SingalProduct;

 
  useEffect(() => {
    getSingalproduct(`${API}?id=${id}`);
  }, []);

  if (isSingalproductLoading) {
    return <div className="page_loading">Loading.....</div>;
  }
  return (
   <>

   <div className="singlproduct_container">
    <div className="store_data_container">

     
       <div className="image_fliter">
   
       <MyImage imgs={image}/>
       </div>
      
 
      <div className="singal_data_section">
        <h2>{name}</h2>
        <h2>{company}  {category}</h2>
        <h2>{stars}</h2>
        <p>{reviews}</p>
        <h2>{price}</h2>
        <p>{description}</p>
        <h3></h3>
        <h3>{stock}</h3>

      </div>

    </div>
   </div>
   </>
  );
};

export default SingleProduct;
