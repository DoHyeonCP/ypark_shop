/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo } from "react";
import styled from "styled-components";
import { tablet } from "../../utils/styleTheme";
import ColorSelector from "../ProductRegister/ColorSelector";
import CategorySelector from "./CategorySelector";
import PriceRange from "./PriceRange";

export default memo(function ShopFilter(props) {
  // const setParamsHandler = (name, value) => {
  //   props.setParams((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <Container>
       <CategorySelector changeHandler={(category) => props.setParams(prev => ({ ...prev, category }))} />
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media ${tablet} {
    padding: 28px 0;
  }
`;

const PriceSelector = styled.div`
  p {
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 22px;
  }
`;
