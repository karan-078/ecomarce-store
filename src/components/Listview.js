import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styled/Button'
const Listview = ({Products}) => {
    
  return (
  <Wrraper>
    <div>
   {Products.map((curElm)=>{
    const {id, name,image,price,description}=curElm

    return (
        <div className="list_view_content " key={id}>
            <figure>
                <img src={image} alt={name} />
            </figure>

            <div className="car_data">
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description.slice(0,90)}...</p>

            <NavLink to={`/singalproduct/${id}`}>
                <Button className='btn'>Read More</Button>
            </NavLink>
            </div>
        </div>
    )
   })}
    </div>
  </Wrraper>
  )
}

const Wrraper = styled.section`
.list_view_content{
display:flex;
width:70rem;
justify-content: space-between;
background:#fff;
padding:4rem 2rem 4rem 2rem;
margin-top:1rem;
}

img{
width:30rem;

}

.car_data{
    width:30rem;  
}

`;
    

export default Listview
