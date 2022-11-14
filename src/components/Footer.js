import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  flex: 1 1 0;
  margin: 0;
  align-items: center;
  justify-content: left;
  width: 100%;
  min-height: ${(props) => props.theme.sizing.footerHeight};
  background-color: black;
  color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  margin: 0;
  gap: 10px;
  align-items: center;
  justify-content: left;
  margin-left: ${(props) => props.theme.spacing.marginLeft};
`;

const StyledAnchor = styled.a`
  color: white;
`;

function Footer() {
  return (
    <>
      <FooterWrapper>
        <TextWrapper>
          <p id="footerName" style={{ margin: 0 }}>
            Created by CowboyAragorn @
          </p>
          <StyledAnchor
            id="footerLink"
            target={"_blank"}
            href="https://github.com/CowboyAragorn"
          >
            https://github.com/CowboyAragorn
          </StyledAnchor>
        </TextWrapper>
      </FooterWrapper>
    </>
  );
}

export default Footer;
