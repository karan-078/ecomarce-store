import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Fot>
     <div className=" footer-item about">
      <h3>ABOUT</h3>
      <p >Contact us</p>
      <p>About us</p>
      <p>carearus</p>
      
     </div>
     <div className=" footer-item help">
     <h3>HELP</h3>
     <p>Contact us</p>
      <p>About us</p>
      <p>carearus</p>
     </div>
     <div className=" footer-item policy">
     <h3>POLICY</h3>
     <p>Contact us</p>
      <p>About us</p>
      <p>carearus</p>
     </div>
     <div className=" footer-item social">
     <h3>SOCIAL</h3>
     <p>Contact us</p>
      <p>About us</p>
      <p>carearus</p>
     </div>
     <div className=" footer-item mail-us">
     <h3>MAIL-US</h3>
     <p>Contact us</p>
      <p>About us</p>
      <p>carearus</p>
     </div>
    
    </Fot>
  )
}
const Fot= styled.section `
min-height:5rem;
background:#172337;
display:  flex;
flex-direction: ;
 justify-content: space-evenly;;
text-align:center;
margin-top:3rem;
h5{
color:#fff;
font-size:2rem;
}

span{

    color:red;
    padding-left:1rem;
}

.footer-item{
 display:flex;
 flex-direction: column;
 align-items:center;
 padding-top:3rem;
}
h3{
  color:#6d8584;
  padding-bottom:3rem;
}

p{
  color:#fff;
  font-size:15px;
 :3rem
}
`;
export default Footer
