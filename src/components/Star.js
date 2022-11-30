import React from 'react'
import{FaStarHalfAlt,FaStar} from 'react-icons/fa'
import{AiOutlineStar} from 'react-icons/ai'
import styled from 'styled-components'
const Star = ({stars,reviews}) => {
  
  const starRating = Array.from({length:5},(v,index)=>{
    // for display 0.5 star rating to user
   let number = index+0.5;

   return <span key={index}>
    {
      stars>=index+1?(<FaStar  className='icon'/>):stars>=number?(<FaStarHalfAlt className='icon'/>):(<AiOutlineStar className='icon'/>)
    }
   </span>
  })
  return (
   <Wrraper>
    <div className="icon-style">
      {starRating}
      <span>{reviews}</span>
    </div>
   </Wrraper>

  )
}

const Wrraper = styled.section`

`;

export default Star;
