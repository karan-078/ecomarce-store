import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Myimage = ({imgs=[{url:''}]}) => {

    const [mainimage, setmainImage] = useState(imgs[0])
  return (
    <Wrraper>
   <div className="container">
    {imgs.map((curent,index)=>{
     return <figure key={index}>
        <img  key={index} src={curent.url} alt={curent.filename}  className="imagee-styles"
        onClick={()=> setmainImage(curent)}
        />
         
     </figure>
    })}
   </div>

   {/* main image section */}

<div className="main-image">
    <img src={mainimage.url} alt={mainimage.filename} />
</div>
    </Wrraper>
  )
}
const Wrraper = styled.section`

 display:grid;
 grid-template-columns: 0.4fr 1fr;
 place-items:center;
 gap:2rem;

 .container{
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:1rem;
 }
.imagee-styles{
    width:10rem;
}
img{
width:40rem;
}
`;

export default Myimage
