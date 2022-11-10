import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.middleGreen};
  width: 100%;
  height: 10vh;
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
  padding-left: 25px;
`;
const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-right: 25px;
`;
const StyledListItem = styled.li`
  background-color: red;
  list-style: none;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: lightcoral;
  }
`;
const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  height: 100%;
  width: 100%;
  color: black;
  font-weight: bold;
`;

const CartDisplay = styled.div``;

const Navbar = () => {
  return (
    <Nav>
      <TitleContainer>
        <StoreTitle>Outdoor General</StoreTitle>
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
