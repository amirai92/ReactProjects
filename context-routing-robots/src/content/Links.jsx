import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = () => (
  <Nav>
    <li>
      <StyledLink to="/">Home</StyledLink>
    </li>
    <li>
      <StyledLink to="/browse">Browse</StyledLink>
    </li>
    <li>
      <StyledLink to="/create">Create</StyledLink>
    </li>
  </Nav>
);
export default Links;

const StyledLink = styled(Link)`
  color: mintcream;
  flex: auto;
  align-self: stretch;
  box-sizing: border-box;
  z-index: 32;
  padding: 16px;
  font-size: 22px;
  line-height: 1.5;
  color: var(--color-header-text);
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  width: 30rem;
  justify-content: space-between;
`;
