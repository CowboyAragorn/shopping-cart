import React from "react";
import styled from "styled-components";
const Checkout = (props) => {
  const CheckoutWrapper = styled.div`
    display: flex;
    min-height: 83%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.offWhite};
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: ${(props) => props.theme.colors.offWhite};
    align-items: center;
    justify-content: center;
  `;

  const TotalContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    width: 75%;
  `;
  const TotalHeader = styled.h3`
    font-size: 2rem;
  `;

  const ItemWrapper = styled.div`
    display: flex;
    align-items: top;
    justify-content: left;
    gap: 40px;
    margin-bottom: 25pt;
  `;

  const ItemInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 20px;
  `;
  const ItemImage = styled.img`
    width: 80px;
    height: 80px;
    margin: 0;
  `;
  const ItemTitle = styled.p`
    margin: 0;
    font-size: 1.5rem;
  `;
  const CheckoutBtn = styled.button`
    padding: 14px;
    font-size: 1.3rem;
    border-radius: 5px;
    border: none;
    color: ${(props) => props.theme.colors.offWhite};
    background-color: ${(props) => props.theme.colors.middleGreen};
    font-weight: bold;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.offWhite};
      color: ${(props) => props.theme.colors.middleGreen};
      border: 3pt solid ${(props) => props.theme.colors.middleGreen};
      padding: 11px;
    }
  `;
  const RemoveBtn = styled.button`
    padding: 7px;
    font-size: 1rem;
    border-radius: 5px;
    width: 50%;
    border: none;
    color: black;
    background-color: lightcoral;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      background-color: red;
    }
  `;

  const removeItem = (props, i) => {
    const cartCopy = [...props.cart];
    cartCopy[i].count = 0;
    cartCopy.splice(i, 1);
    props.setCart(cartCopy);
  };

  return (
    <CheckoutWrapper>
      <TotalContainer>
        <TotalHeader>Your Shopping Cart</TotalHeader>
        {props.cart.map((item, i) => {
          return (
            <ItemWrapper>
              <ItemImage src={item.img}></ItemImage>
              <ItemInfoWrapper>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemTitle>{item.price}</ItemTitle>
                <ItemTitle>{item.count}</ItemTitle>
                <RemoveBtn onClick={removeItem.bind(this, props, i)}>
                  Remove
                </RemoveBtn>
              </ItemInfoWrapper>
            </ItemWrapper>
          );
        })}
        <CheckoutBtn>Check Out</CheckoutBtn>
      </TotalContainer>
    </CheckoutWrapper>
  );
};

export default Checkout;
