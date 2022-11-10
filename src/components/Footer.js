import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 5vh;
  background-color: ${(props) => props.theme.colors.offWhite};
`;

const TextWrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: left;
  margin-left: ${(props) => props.theme.spacing.marginLeft};
`;

function Footer() {
  return (
    <>
      <FooterWrapper>
        <TextWrapper>
          <p id="footerName" style={{ margin: 0 }}>
            Created by CowboyAragorn @
          </p>
          <a
            id="footerLink"
            target={"_blank"}
            href="https://github.com/CowboyAragorn"
          >
            https://github.com/CowboyAragorn
          </a>
        </TextWrapper>
      </FooterWrapper>
    </>
  );
}

export default Footer;
