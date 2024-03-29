/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

import { FiMinus, FiPlus } from "react-icons/fi";

export default memo(function CartQuantitySelector(props) {
  const [quantity, setQuantity] = useState(props.quantity);



  useEffect(() => {
    props.setQuantity(quantity);
  }), [quantity];

  // const quantityPlusHandler = () => {
  //   quantity < props.maxQuantity ? setQuantity((prev) => prev + 1) : null;
  // };
  // const quantityMinusHandler = () => {
  //   quantity > 1 ? setQuantity((prev) => prev - 1) : null;
  // };

  const quantityPlusHandler = () => {
    if (quantity < props.maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      props.updateItemQuantity(props.itemId, newQuantity);
    }
  };

  const quantityMinusHandler = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      props.updateItemQuantity(props.itemId, newQuantity);
    }
  };

  return (
    <Container>
      <button onClick={quantityMinusHandler}>
        <FiMinus />
      </button>
      <span>{quantity}</span>
      <button onClick={quantityPlusHandler}>
        <FiPlus />
      </button>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #ececec;
  padding: 4px 8px;
  color: #878787;
  font-size: 14px;

  button {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    stroke-width: 3;
  }
`;
