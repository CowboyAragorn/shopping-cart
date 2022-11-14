import React from "react";
import styled from "styled-components";

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
const CheckoutContainer = styled.div`
  position: sticky;
  display: flex;
  top: 15px;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  width: 30%;
  padding: 15px;
  margin-right: 15px;
  background-color: white;
`;
const StyledHeader = styled.h3`
  font-size: 2rem;
`;
const ItemTitle = styled.p`
  display: flex0;
  margin: 0;
  font-size: 1.5rem;
`;

const PaymentContainer = (props) => {
  return (
    <CheckoutContainer>
      <StyledHeader>Order Summary</StyledHeader>
      <ItemTitle>Subtotal: ${props.totalCalc}</ItemTitle>
      <ItemTitle>Standard Shipping: FREE</ItemTitle>
      <ItemTitle>Estimated Taxes: --</ItemTitle>
      <ItemTitle>Total: ${props.totalCalc}</ItemTitle>
      <ItemTitle>
        Total Savings: ${Math.floor(((props.totalCalc / 7) * 100) / 100)}
      </ItemTitle>
      <CheckoutBtn>Check Out</CheckoutBtn>
    </CheckoutContainer>
  );
};

export default PaymentContainer;
