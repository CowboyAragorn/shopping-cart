import React from "react";
import styled from "styled-components";
import shopItems from "./shopItems";

const ShopWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: ${(props) => props.theme.sizing.mainHeight};
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.offWhite};
  padding-top: 25px;
  padding-bottom: 25px;
`;

const ShopItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${(props) => props.theme.colors.offWhite};
  gap: 100px;
  align-items: center;
  justify-content: center;

  /* display: grid;
  width: 100%;
  background-color: ${(props) => props.theme.colors.offWhite};
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-items: center;
  justify-self: center;
  row-gap: 100px; */
`;

const ItemContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 350px;
  border: 1pt lightgrey solid;
  padding: 15px;
  margin: 0;
  border-radius: 10px;
`;
const ItemImage = styled.img`
  width: 350px;
  height: 450px;
  margin: 0;
`;
const ItemName = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;
const ItemPrice = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const StyledButton = styled.button`
  padding: 12px;
  width: 60%;
  font-size: 1.1rem;
  border-radius: 15px;
  border: none;
  background-color: ${(props) => props.theme.colors.middleGreen};
  color: black;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #356736;
  }
`;

const handleAddToCart = (props, item) => {
  console.log(item);
  props.setCart([...props.cart, item]);
  //consoleLog();
};

const Shop = (props) => {
  return (
    <ShopWrapper>
      <ShopItemsGrid>
        {shopItems.map((item, i) => {
          return (
            <ItemContainer key={i}>
              <ItemName>{item.name}</ItemName>
              <ItemImage src={item.img}></ItemImage>
              <ItemPrice>${item.price}</ItemPrice>
              <StyledButton onClick={handleAddToCart.bind(this, props, item)}>
                Add to Cart
              </StyledButton>
            </ItemContainer>
          );
        })}
      </ShopItemsGrid>
    </ShopWrapper>
  );
};

export default Shop;
