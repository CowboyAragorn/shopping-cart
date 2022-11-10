import React from "react";
import styled from "styled-components";

const ShopWrapper = styled.div`
  height: ${(props) => props.theme.sizing.mainHeight};
  background-color: lightgoldenrodyellow;
`;

const Shop = () => {
  return <ShopWrapper />;
};

export default Shop;
