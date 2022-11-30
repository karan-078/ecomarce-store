import React from 'react'
import Product from './Product'
const Gridview = ({Products}) => {

    
  return (
    <div>
   {Products.map((curr,id)=>{
    return <Product key={curr.id}{...curr}/>
   })}
    </div>
  )
}

export default Gridview
