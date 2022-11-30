import React from "react";
import styled from "styled-components";
const Trusted = () => {
  return (
    <Wrapper>
      <div className="section-trusted"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
   {
    display: flex;
    justify-content: center;
    align-center: center;

    .section-trusted {
     width: 120rem;
      min-height: 15rem;
      background-color: #e2e8ec;
      margin-top:4rem;
    }
  }
`;

export default Trusted;
