import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
const Header = () => {
  return (
    <Mainheader>
    <NavLink to={'/'}>
    <h2>K<span>@</span>r<span>@</span>N</h2>
    </NavLink>
    <Nav/>
    </Mainheader>
  )
}

const Mainheader = styled.header`
padding: 0 4.8rem;
height : 10rem; 
display: flex;
justify-content: space-between;
align-items:center;
 postion: relative;
min-width:100vw;
background:#2874f0;

h2{
  color:#d8e6fc;
}

span{
  color:#afbb58;
}


`

export default Header
