import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  width: 100%;
  height: 10vh;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StoreTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 25px;
`;
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-right: 25px;
`;
const Button = styled.button`
  padding: 15pt;
  background-color: red;
`;
const CartDisplay = styled.div``;

const Navbar = () => {
  return (
    <Nav>
      <TitleContainer>
        <StoreTitle>Store Name</StoreTitle>
      </TitleContainer>
      <LinksContainer>
        <Button>Home</Button>
        <Button>Shop</Button>
        <Button>Contact</Button>
        <CartDisplay>0 in Cart</CartDisplay>
      </LinksContainer>
    </Nav>
  );
};

export default Navbar;
