import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.offWhite};
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
  ${(props) => props.theme.colors.offWhite};
  list-style: none;

  &:hover {
    cursor: pointer;
    border-bottom: solid 3pt black;
  }
`;
const StyledLink = styled(NavLink)`
  display: inline-block;
  font-size: 1.8rem;
  padding: 20px;
  height: 100%;
  width: 100%;
  color: black;
  font-weight: bold;
  text-decoration: none;
`;

const CartDisplay = styled.div``;

const Navbar = () => {
  return (
    <Nav>
      <TitleContainer>
        <StoreTitle>Get Outdoors</StoreTitle>
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
