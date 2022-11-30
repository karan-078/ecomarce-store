import styled from "styled-components";
import { useProductContext } from "../Context/ProductContext";
import Product from "./Product";
const Featureproducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  return (
    <Wrapper className="section">
      <div className="feture_products_container">
        <div className="chek_product">Chek now</div>
        <div className="feture">Our service</div>

        <div className="grid grid-three-column">
          {featureProducts.map((currntElm) => {
            return <Product key={currntElm.id} {...currntElm} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
background: #e2e8ec;
margin:0 8rem 6rem 8rem;
justify-content:center;
display:flex;
min-height:40rem;
align-items:center;

.feture_products_container{
  min-height:20rem;
  min-width:110rem; 
  display:flex;
  flex-direction: column;
}
`

;
export default Featureproducts;
