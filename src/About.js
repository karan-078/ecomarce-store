import React from 'react'
import styled from 'styled-components';
import { useProductContext } from './Context/ProductContext';
const About = () => {

  const {myname} = useProductContext()
  return (
   
 <Wrapper>
 <h1>{myname}</h1> 
  <div className="about-page">
    <div className="Image-section">
     <figure><img src="image/ecomrce.jpg" alt="about-imag" /></figure>
    </div>

    <div className="content">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, deserunt quam? Perferendis exercitationem esse nulla! Beatae dolore delectus labore ex, sapiente magnam, ducimus facilis in eum quae incidunt voluptatum et neque tenetur vitae, consequuntur tempora eligendi maxime? Eveniet, reprehenderit recusandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptas, tempora animi, sit perspiciatis aperiam incidunt cupiditate laudantium ullam culpa hic blanditiis neque. Id blanditiis consectetur libero quibusdam accusamus eius quo magni dolor vero fuga? Rerum mollitia doloremque placeat necessitatibus!</p>
    </div>
  </div>
 </Wrapper>
  )
}
const Wrapper = styled.section`
display:flex;
justify-content: center;
aligen-item:center;
min-height:80vh;
.about-page{
  max-width:120rem;
  display:flex;
  justify-content: space-between;
  margin: 4rem 0rem 2rem 0rem;
}
.Image-section{
  width:50rem;
  display:flex;
  justify-content: space-between;
}

img{
  width:50rem;
  height:50rem;
}

.content{
  width:50rem;
  height:50rem;
  margin:1rem 3rem 1rem 3rem;
}
`;

export default About
