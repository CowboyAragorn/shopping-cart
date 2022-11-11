import React from "react";
import styled from "styled-components";
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
  width: 70%;
  border: 1pt solid black;
  align-items: flex-end;
`;
const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0;
`;
const ItemTitle = styled.p`
  display: flex0;
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
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  height: 40px;
  width: 100px;
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

const PaymentContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  width: 30%;
  height: fit-content;
  margin-right: 15px;
  background-color: white;
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

const Checkout = (props) => {
  const totalCalc = calcTotal(props);
  return (
    <CheckoutWrapper>
      <CartItemsContainer>
        <StyledHeader>Your Shopping Cart</StyledHeader>
        <ItemGrid>
          {props.cart.map((item, i) => {
            return (
              <ItemInfoWrapper>
                <div>
                  <ItemImage src={item.img}></ItemImage>
                  <ItemTitle>{item.name}</ItemTitle>
                </div>
                <div>
                  <ItemTitle>{item.price}</ItemTitle>
                  <ItemTitle>{item.count}</ItemTitle>
                  <RemoveBtn onClick={removeItem.bind(this, props, i)}>
                    Remove
                  </RemoveBtn>
                </div>
              </ItemInfoWrapper>
            );
          })}
        </ItemGrid>
      </CartItemsContainer>
      <PaymentContainer>
        <StyledHeader>Order Summary</StyledHeader>
        <ItemTitle>Subtotal: ${totalCalc}</ItemTitle>
        <ItemTitle>Standard Shipping: FREE</ItemTitle>
        <ItemTitle>Estimated Taxes: --</ItemTitle>
        <ItemTitle>Total: ${totalCalc}</ItemTitle>
        <ItemTitle>
          Total Savings: ${Math.floor(((totalCalc / 7) * 100) / 100)}
        </ItemTitle>
        <CheckoutBtn>Check Out</CheckoutBtn>
      </PaymentContainer>
    </CheckoutWrapper>
  );
};

export default Checkout;
