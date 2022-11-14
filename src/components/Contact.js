import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  height: ${(props) => props.theme.sizing.mainHeight};
  background-color: ${(props) => props.theme.colors.offWhite};
  justify-content: center;
`;

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1pt solid black;
  width: 50%;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  background-color: ${(props) => props.theme.colors.middleGreen};
  padding: 25px;
  margin: 15px;
  border: none;
  border-radius: 15px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 6%;
`;

const StyledHeader = styled.header`
  font-size: 2.5rem;
  color: white;
  margin: 0;
`;
const StyledP = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: white;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 50%;
  font-size: 15px;
  background-color: ${(props) => props.theme.colors.middleGreen};
  color: white;
  border: none;
  border-bottom: 1pt solid white;
  font-size: 1.2rem;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  height: 170px;
  width: 50%;
  font-size: 15px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.middleGreen};
  color: white;
  border: none;
  border: 1pt solid white;
  font-size: 1.2rem;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const FakeSubmit = () => {};

//TODO: make checkoutBtn an importable styled component for contact, payment container, and shop
const SubmitFormBtn = styled.button`
  padding: 14px;
  font-size: 1.3rem;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: ${(props) => props.theme.colors.middleGreen};
  font-weight: bold;
  text-decoration: none;
  width: 25%;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.offWhite};
    color: ${(props) => props.theme.colors.middleGreen};
  }
`;

const clearFakeForm = (e) => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  name.value = "";
  email.value = "";
  message.value = "";
};

//don't want to make this an actual form that submits because
//not implementing cookies, don't want to lose state on reload
//would actually make this a form with validation otherwise
const Contact = () => {
  return (
    <ContactWrapper>
      <ContactFormContainer>
        <HeaderContainer>
          <StyledHeader>Contact Us</StyledHeader>
          <StyledP>Lets explore how we can serve you</StyledP>
        </HeaderContainer>
        <InputFieldContainer>
          <label htmlFor="name"></label>
          <StyledInput id="name" placeholder="Your Name" required></StyledInput>
        </InputFieldContainer>
        <InputFieldContainer>
          <label htmlFor="email"></label>
          <StyledInput id="email" placeholder="Your Email"></StyledInput>
        </InputFieldContainer>
        <InputFieldContainer>
          <label htmlFor="message"></label>
          <StyledTextArea
            id="message"
            placeholder="Your Message"
          ></StyledTextArea>
        </InputFieldContainer>
        <SubmitFormBtn onClick={clearFakeForm}>Submit</SubmitFormBtn>
        <StyledP>
          By submitting this form you agree to the Outdoor Co. privacy policy.
        </StyledP>
      </ContactFormContainer>
    </ContactWrapper>
  );
};

export default Contact;
