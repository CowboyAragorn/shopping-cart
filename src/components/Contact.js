import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  height: ${(props) => props.theme.sizing.mainHeight};
  background-color: lightslategray;
`;

const Contact = () => {
  return <ContactWrapper />;
};

export default Contact;
