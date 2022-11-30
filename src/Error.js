import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
   <Wraper>
   <div className="Error-page">
   <h1>4    0<span> <i  class="fas fa-ghost"></i></span>4</h1>
  <h2>Error: 404 page not found</h2>
  <p>Sorry, the page you're looking for cannot be accessed</p>
   </div>
   </Wraper>
  )
}

const Wraper = styled.section `
 display:flex;
 justify-content:center;
 height:80vh;
*,
*:after,
*:before {
  box-sizing: border-box;
}

.Error-page{
  margin-top: 6rem;
   
}

main {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

h1 {
  color: $heading;
  font-size: 12.5rem;
  letter-spacing: .10em;
  margin: .025em 0;
  text-shadow: .05em .05em 0 rgba(0,0,0,.25);
  white-space: nowrap;
  
  @media(max-width: 30rem) {
    font-size: 8.5rem;
  }
  

}

h2 {
  color: #e7ebf2;
  margin-bottom: .40em;
}

p {
  color: #ccc;
  margin-top: 0;
}


}
`;

export default Error
