import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import {CgMenu,CgClose} from 'react-icons/cg'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useState } from 'react';
const Nav = () => {
    const [menuIcon, setmenuIcon] = useState()
 const Nav = styled.nav`
 .navbar-lists{
 display: flex;
 gap:4.8rem;
 align-items:center;
 }


 .navbar-link{
 color: #d8e6fc;
 font-size: 2rem;
 }
 .mobile-nav-btn{
 display:none;
  background-color: transparent;
 cursor:pointer;
  border:none;
 }

.Cart-trolly{
    position: relative;
         }
    
     .Cart-total--item{
     width: 2.5rem;
     height: 2.5rem;
     border-radius: 50%;
     color: #000;
     position:absolute;
     top: -20%;
     left:70%
     display: grid;
     place-items:center;
     background-color: #d8e6fc;
     }
.mobile-nav-icon[name= 'Close-outline']{
    display:none
}

.Close-outline{
    display:none;
}

 @media (max-width:${({theme})=> theme.media.mobile}) {
   .mobile-nav-btn{ display: inline-block; 
    z-index: 9999;
    border: ${({theme})=>theme.colors.black}
   }

   .mobile-nav-icon{
    font-size:4.2rem;
    color:${({theme})=>theme.colors.black}
   }

   .active .mobile-nav-icon{
    display:none;
    font-size:4.2rem;
    position:absolute;
     top:5%;
    right:10%;
    color:${({theme})=>theme.colors.black};
    z-index:9999;
   }

   .active .Close-outline{
    display:inline-block;
}
// .navbar{
//     width:100%;
//     background-color:pink;
// }
.navbar-lists{
    width: 100vw;  
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    display: flex;
     justify-content: center;
    align-items: center;
    flex-direction: column;
    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    transition: all 3ms linear;
  }

  .active .navbar-lists{
    visibility:visible ;
    opacity: 1;
    transform: translateX(0);
    z-index: 999;
  transition: all 3ms linear;
}

.navbar-link{
    font-size:4.2rem;
}
 }
   
 `;
 return (
    <Nav>
     <div className={menuIcon?'navbar active ':'navbar'}>
        <ul className="navbar-lists ">
          <li>
            <NavLink to='/' className='navbar-link ' onClick={()=>setmenuIcon(false)}>
             Home
            </NavLink>
        </li>  

        <li>
            <NavLink to='/about' className='navbar-link ' onClick={()=>setmenuIcon(false)}>
             About
            </NavLink>
        </li>  
        <li>
            <NavLink to='/products' className='navbar-link ' onClick={()=>setmenuIcon(false)}>
            Product
            </NavLink>
        </li>  
        <li>
            <NavLink to={'/contact'} className='navbar-link '  onClick={()=>setmenuIcon(false)}>
             Contact
            </NavLink>
        </li>  

        <li>
            <NavLink to={'/cart'} className='navbar-link Cart-trolly'>
             <FiShoppingCart className='Cart-trolly'/>

             <span className='Cart-total--item'>
                0
             </span>
            </NavLink>
        </li>  
        </ul>

    {/* two button for open and close button maniu */}

        <div className="mobile-nav-btn">
            <CgMenu name='mainu-outline' className='mobile-nav-icon'
             onClick={()=>setmenuIcon(true)}
            />
            <CgClose name='Close-outline' className='mobile-nav-icon Close-outline'
             onClick={()=>setmenuIcon(false)}
            />
        </div>
        </div>   
    </Nav>
 )
}

export default Nav
