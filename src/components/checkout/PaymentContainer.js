import React from "react";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  position: sticky;
  display: flex;
  top: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  width: 25%;
  padding: 15px;
  margin-right: 15px;
  background-color: white;
`;
const TotalingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

const StyledHeader = styled.h3`
  font-size: 2rem;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const StyledTotal = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;
const StyledSavings = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: red;
  font-weight: bold;
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

const PaymentContainer = (props) => {
  return (
    <CheckoutContainer>
      <StyledHeader>Order Summary</StyledHeader>
      <TotalingContainer>
        <StyledTotal>Subtotal: ${props.totalCalc}</StyledTotal>
        <ItemTitle>Standard Shipping: FREE</ItemTitle>
        <ItemTitle>Estimated Taxes: --</ItemTitle>
      </TotalingContainer>
      <TotalingContainer>
        <StyledTotal>Total: ${props.totalCalc}</StyledTotal>
        <StyledSavings>
          Total Savings: ${Math.floor(((props.totalCalc / 7) * 100) / 100)}
        </StyledSavings>
      </TotalingContainer>
      <CheckoutBtn>Check Out</CheckoutBtn>
    </CheckoutContainer>
  );
};

export default PaymentContainer;
