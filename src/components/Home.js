import React from "react";
import styled from "styled-components";
import mtBackground from "../images/pilotMt.jpg";

const HomeContainer = styled.div`
  height: ${(props) => props.theme.sizing.mainHeight};
  background-image: url(${mtBackground});
  background-repeat: no-repeat;
  background-size: 100% 90vh;
`;

const Home = () => {
  return <HomeContainer />;
};

export default Home;
