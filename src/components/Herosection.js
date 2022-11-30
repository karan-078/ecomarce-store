import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styled/Button';
const Herosection = () => {
  return (
 <Wrraper>
    <div className="container">
        <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className="intro-data">Welcome</p>
                <h1>K@r@N Shop</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus, itaque odio voluptate quam fugit rem! Officia molestias omnis, sunt placeat tempora quibusdam cupiditate nisi non dolores labore hic ullam!</p>

                <NavLink>
                 <Button>Shop now</Button>
                </NavLink>
            </div>

            <div className="hero-section-image">
                <figure><img src="image/ecomarce2.webp" alt="my-image"  className='style-image'/></figure>
            </div>
        </div>
    </div>
 </Wrraper>
  )
}

const Wrraper= styled.section`
 padding: 12rem 0;
img {
  min-width: 40rem;
  height: 40rem;
}
.hero-section-data {
  p {
    margin: 2rem 0;
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }
  .intro-data {
    margin-bottom: 0;
  }
}
.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;
  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }
  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    // background-color: rgba(81, 56, 238, 0.4);
  }
}
`;

export default Herosection
