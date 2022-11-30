import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Product = ({id,name,image,price,category}) => {
  return (
    <Wrapper>
    <NavLink to={`/singalproduct/${id}`}>
     <div className="card">
        <figure>
            <img src={image} alt={name} />
        </figure>

        <figcaption className='caption'>{category}</figcaption>
        <div className="card-data">
            <div className="card-data-flex">
                <h3 className='card-data-name'>{name}</h3>
                <p className="card-dtat-price">{price}</p>
            </div>
        </div>
     </div>
    </NavLink>
    </Wrapper>
  )
  
}


const Wrapper = styled.div`

img{
    width:20rem;
    height:10rem;
}

.card{
   max-width:120rem;
   
}
`;

export default Product
 