import React from "react";
import Productlist from "./components/Productlist";
import Sort from "./components/Sort";
import Flitersection from "./components/Flitersection";
import styled from "styled-components";
const Products = () => {
  return (
    <Wrraper>
      <div className="product-grid">
        <div>
          <Flitersection />
        </div>

        <section className="product-sort">
          <div className="sort-flitter">
            <Sort />
          </div>
          <hr/>
          <div className="main-product">
            <Productlist />
          </div>
        </section>
      </div>
    </Wrraper>
  );
};

const Wrraper = styled.section`

display:grid;
 place-items:center;
  .product-grid {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    background-color:red;
  }
`;

export default Products;
