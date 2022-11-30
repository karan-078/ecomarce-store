import React from 'react'
import {useFliterContext} from '../Context/FliterContext'
import Gridview from './Gridview'
import Listview from './Listview'
const Productlist = () => {

  const { filter_products,grid_view} = useFliterContext()
 
  if (grid_view===true){
    return <Gridview Products={ filter_products}/>
  }

  if (grid_view===false){
    return <Listview Products={filter_products}/>
  }
  return (
    <div>
      <h4>I am a product LIst</h4>
    </div>
  )
}

export default Productlist
