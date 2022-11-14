import React from "react";
import styled from "styled-components";
import PaymentContainer from "./PaymentContainer";

const CheckoutWrapper = styled.div`
  display: flex;
  min-height: 83%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.offWhite};
  padding-top: 25px;
  padding-bottom: 25px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10%;
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 60%;
  margin-left: 25px;
  padding: 25px;
`;
const StyledHeader = styled.h3`
  font-size: 2rem;
`;

const ItemGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
`;

const ItemInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 15px;
  width: 70%;
  align-items: flex-end;
  justify-items: center;
  border-bottom: 1pt solid black;
`;
const ItemFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const QuanitityFlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ItemImage = styled.img`
  object-fit: contain;
  width: 100px;
  height: 100px;
  margin: 0;
`;
const ItemTitle = styled.p`
  display: flex0;
  margin: 0;
  font-size: 1.5rem;
`;

const QuantityBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: ${(props) => props.theme.colors.middleGreen};
  font-weight: bold;
  font-size: 1rem;
  padding: 13px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1pt solid ${(props) => props.theme.colors.middleGreen};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.middleGreen};
    color: white;
    border: 1pt solid ${(props) => props.theme.colors.middleGreen};
  }
`;

const removeItem = (props, i) => {
  const cartCopy = [...props.cart];
  cartCopy[i].count = 0;
  cartCopy.splice(i, 1);
  props.setCart(cartCopy);
};

const calcTotal = (props) => {
  let total = 0;
  props.cart.map((item) => {
    let quantity = item.count;
    console.log(quantity);
    let price = item.price;
    console.log(price);
    let itemTotal = price * quantity;
    console.log(itemTotal);
    total = total + itemTotal;
    return total;
  });
  return Math.floor(total * 100) / 100;
};

const decrement = (props, i) => {
  let cartCopy = [...props.cart];
  if (cartCopy[i].count === 1) {
    removeItem(props, i);
    return;
  } else {
    cartCopy[i].count--;
    props.setCart(cartCopy);
  }
};

const increment = (props, i) => {
  let cartCopy = [...props.cart];
  cartCopy[i].count++;
  props.setCart(cartCopy);
};

const Checkout = (props) => {
  const totalCalc = calcTotal(props);
  return (
    <CheckoutWrapper>
      <CartItemsContainer>
        <StyledHeader>Your Shopping Cart</StyledHeader>
        <ItemGrid>
          {props.cart.map((item, i) => {
            const itemTotalBasic = item.count * item.price;
            const itemTotalRounded = Math.floor(itemTotalBasic * 100) / 100;
            return (
              <ItemInfoWrapper>
                <ItemFlexContainer>
                  <ItemImage src={item.img}></ItemImage>
                  <ItemTitle>{item.name}</ItemTitle>
                </ItemFlexContainer>
                <ItemFlexContainer>
                  <ItemTitle>${item.price}</ItemTitle>
                  <QuanitityFlexContainer>
                    <QuantityBtn onClick={decrement.bind(this, props, i)}>
                      -
                    </QuantityBtn>
                    <ItemTitle>{item.count}</ItemTitle>
                    <QuantityBtn onClick={increment.bind(this, props, i)}>
                      +
                    </QuantityBtn>
                  </QuanitityFlexContainer>
                  <ItemTitle>Item total: {itemTotalRounded}</ItemTitle>
                </ItemFlexContainer>
              </ItemInfoWrapper>
            );
          })}
        </ItemGrid>
      </CartItemsContainer>
      <PaymentContainer totalCalc={totalCalc} />
    </CheckoutWrapper>
  );
};

export default Checkout;
