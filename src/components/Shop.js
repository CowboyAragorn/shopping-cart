import React from "react";
import styled from "styled-components";
import shopItems from "./shopItems";

const ShopWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: ${(props) => props.theme.sizing.mainHeight};
  background-color: ${(props) => props.theme.colors.offWhite};
  background-color: white;
  overflow: scroll;
`;

const ShopItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-items: center;
  justify-self: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0;
`;

const ItemImage = styled.img`
  width: 200px;
  height: 150px;
`;

const Shop = () => {
  return (
    <ShopWrapper>
      <ShopItemsWrapper>
        {shopItems.map((item) => {
          return (
            <ItemContainer>
              <ItemImage src={item.img}></ItemImage>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </ItemContainer>
          );
        })}
      </ShopItemsWrapper>
    </ShopWrapper>
  );
};

export default Shop;
