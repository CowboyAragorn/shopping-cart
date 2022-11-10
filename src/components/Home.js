import React from "react";
import styled from "styled-components";
import mtBackground from "../images/hikingStock.jpeg";
import { NavLink } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  height: ${(props) => props.theme.sizing.mainHeight};
  background-image: url(${mtBackground});
  background-repeat: no-repeat;
  background-size: 100% 90vh;
  box-shadow: 0pt 30px;
`;

const AdvertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.offWhite};
  color: ${(props) => props.theme.colors.oliveDrab};
  height: 250px;
  width: 425px;
  margin-left: 100px;
  margin-top: 5%;
  border-radius: 15px;
`;
const AdvertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  gap: 30px;
  height: 100%;
  margin: 0;
  margin-top: 10px;
`;

const StyledHeader = styled.h2`
  font-size: 2.3rem;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;
const StyledP = styled.p`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  overflow-wrap: break-word;
  margin: 0;
  width: 85%;
  font-size: 1.2rem;
`;
const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 14px;
  font-size: 1.3rem;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.offWhite};
  background-color: ${(props) => props.theme.colors.middleGreen};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.offWhite};
    color: ${(props) => props.theme.colors.middleGreen};
    border: 3pt solid ${(props) => props.theme.colors.middleGreen};
    padding: 11px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <AdvertWrapper>
        <AdvertContainer>
          <StyledHeader>Holidays Start Here</StyledHeader>
          <StyledP>
            Our best outdoor supplies, ready for all your adventures to come -
            check out the latest deals on the brands you love
          </StyledP>
          <StyledLink to="./shop">Explore our Collection</StyledLink>
        </AdvertContainer>
      </AdvertWrapper>
    </HomeContainer>
  );
};

export default Home;
