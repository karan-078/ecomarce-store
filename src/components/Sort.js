import React from 'react'
import styled from 'styled-components'
import {BsFillGridFill} from 'react-icons/bs'
import {BsList} from 'react-icons/bs'
import { useFliterContext } from '../Context/FliterContext'
const Sort = () => {

  const {  filter_products,grid_view , setGridview, setList, sort} = useFliterContext()
 return(
  <Wrraper className='sort'>
    <div className="sorrt-section">
      <div className="sort_btn">
       <button className={grid_view? ' active sort__btn':'sort__btn'}
        onClick={setGridview}
       > <BsFillGridFill  className='icon'/></button>

       <button className={!grid_view? ' active sort__btn':'sort__btn'}
        onClick={setList}
       > <BsList className='icon' /></button>
      </div>
      <div className="total_products">
        {`${ filter_products.length} Product Available`}
      </div>
      <div className="sort_prize">
     <form action="#">
      <label htmlFor="sort"></label>
       <select name="sort" id="sort" onClick={sort}>
        <option value="lowest">Price(lowest)</option>
        <option value="#" disabled></option>
        <option value="highest">Price(highest)</option>
        <option value="#" disabled></option>
        <option value="a-z">Price(a-z)</option>
        <option value="#" disabled></option>
        <option value="z-a">Price(z-a)</option>
       </select>
      </form> 
      </div>
    </div>
  </Wrraper>
 )
}

const Wrraper = styled.section`

.sorrt-section{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:1rem 2rem;
}
`;

export default Sort
