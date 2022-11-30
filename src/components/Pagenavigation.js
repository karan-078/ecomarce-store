import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Pagenavigation = ({ title }) => {
  return (
    <Wrapper className="page-navigation">
      <NavLink to={"/"}>HOME</NavLink>/{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 3rem 0 3rem;
  background-color: red;
`;

export default Pagenavigation;
