import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  width: 100%;
  height: ${(props) => props.theme.sizing.navBarHeight};
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StoreTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  padding-left: ${(props) => props.theme.spacing.marginLeft};
`;
const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-right: 25px;
`;
const StyledListItem = styled.li`
  list-style: none;
  &:hover {
    cursor: pointer;
    border-bottom: solid 3pt ${(props) => props.theme.colors.middleGreen};
  }
`;
const StyledLink = styled(NavLink)`
  display: inline-block;
  font-size: 1.8rem;
  padding: 20px;
  color: white;
  height: 100%;
  width: 100%;
  font-weight: bold;
  text-decoration: none;
`;

const CartDisplay = styled.div``;

const Navbar = () => {
  return (
    <Nav>
      <TitleContainer>
        <StoreTitle>The Outdoors Co.</StoreTitle>
      </TitleContainer>
      <LinksContainer>
        <StyledListItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/shop">Shop</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledListItem>
        <CartDisplay>0 in Cart</CartDisplay>
      </LinksContainer>
    </Nav>
  );
};

export default Navbar;
